import {
  configureChains,
  createConfig,
  getAccount,
  signMessage,
  watchAccount,
} from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  Confirm,
  DomNode,
  el,
  ErrorAlert,
  Loader,
  msg,
  StringUtil,
  View,
} from "common-dapp-module";
import { ethers } from "ethers";
import Config from "../Config.js";
import assets from "../_shared/assets.js";
import { get, post } from "../_shared/edgeFunctionFetch.js";
import Layout from "./Layout.js";

export default class Home extends View {
  private container: DomNode;
  private web3modal: Web3Modal;

  private accessToken: string = "";
  private waitingWalletConnect: boolean = false;
  private unwatchAccount: () => void;

  constructor() {
    super();
    Layout.append(
      this.container = el(".home-view"),
    );

    const chains = [mainnet];

    const { publicClient } = configureChains(chains, [
      w3mProvider({ projectId: Config.walletConnectProjectID }),
    ]);
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({
        projectId: Config.walletConnectProjectID,
        chains,
      }),
      publicClient,
    });
    const ethereumClient = new EthereumClient(wagmiConfig, chains);
    this.web3modal = new Web3Modal({
      projectId: Config.walletConnectProjectID,
    }, ethereumClient);

    this.unwatchAccount = watchAccount((account) => {
      if (account.address && this.waitingWalletConnect) {
        this.waitingWalletConnect = false;
        this.addWalletAddress();
      }
    });

    this.init();
  }

  private showError(error: any) {
    console.error(error);
    new ErrorAlert({
      title: msg("error-alert-title"),
      message: error.error,
      confirmTitle: msg("error-alert-button"),
    });
  }

  private async init() {
    this.container.empty().append(new Loader());
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      this.showDiscordLoginButton();
    } else {
      const response = await get(`get-discord-user-by-code?code=${code}`);
      if (response.status === 200) {
        const user = await response.json();
        this.accessToken = user.accessToken;
        this.user = user;
      } else {
        console.error(await response.json());
        this.showDiscordLoginButton();
      }
    }
  }

  private showDiscordLoginButton() {
    this.container.empty().append(
      el("p", msg("discord-login-message")),
      el(
        "a.discord-login-button",
        el("img", { src: "/images/discord-logo.svg" }),
        msg("discord-login-button"),
        {
          href: Config.discordAuthURL,
        },
      ),
    );
  }

  private async loadUser() {
    this.container.empty().append(new Loader());
    const response = await get(
      `get-discord-user?access_token=${this.accessToken}`,
    );
    if (response.status === 200) {
      this.user = await response.json();
    } else {
      this.showError(await response.json());
      this.showDiscordLoginButton();
    }
  }

  private async addWalletAddress() {
    const nonceResponse = await get(
      `new-nonce?access_token=${this.accessToken}&address=${getAccount().address}`,
    );
    if (nonceResponse.status !== 200) {
      this.showError(await nonceResponse.json());
      this.showDiscordLoginButton();
      this.web3modal.closeModal();
      return;
    }

    const nonceData = await nonceResponse.json();
    const signedMessage = await signMessage({
      message: `Sign in to Gaia Protocol\nNonce: ${nonceData.nonce}`,
    });
    const addWalletResponse = await post("add-wallet-address", {
      accessToken: this.accessToken,
      signedMessage,
    });
    if (addWalletResponse.status === 200) {
      this.loadUser();
    } else {
      this.showError(await addWalletResponse.json());
      this.showDiscordLoginButton();
    }

    this.web3modal.closeModal();
  }

  private async removeWalletAddress(address: string) {
    const response = await post("remove-wallet-address", {
      accessToken: this.accessToken,
      address,
    });
    if (response.status === 200) {
      this.loadUser();
    } else {
      this.showError(await response.json());
      this.showDiscordLoginButton();
    }
  }

  private set user(user: {
    id: string;
    nickname: string;
    avatar: string;
    walletAddresses: string[];
    assets: { chain: string; address: string; balance: string }[];
    roles: { name: string; color: number }[];
  }) {
    const walletList = el("ul.wallet-list");
    const assetList = el("ul.asset-list");
    const roleList = el("ul.role-list");

    this.container.empty().append(
      el(
        ".message-box",
        el("img", {
          src:
            `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
        }),
        el(
          ".container",
          el("h1", user.nickname),
          el(
            ".list-wrapper",
            el("h2", msg("wallet-list-title")),
            walletList,
            el("a.action-button", msg("add-wallet-address-button"), {
              click: async () => {
                this.web3modal.openModal();
                if (getAccount().address) {
                  this.addWalletAddress();
                } else {
                  this.waitingWalletConnect = true;
                }
              },
            }),
          ),
          el(
            ".list-wrapper",
            el("h2", msg("asset-list-title")),
            assetList,
          ),
          el(
            ".list-wrapper",
            el("h2", msg("role-list-title")),
            roleList,
          ),
        ),
      ),
    );

    if (user.walletAddresses && user.walletAddresses.length > 0) {
      for (const walletAddress of user.walletAddresses) {
        walletList.append(
          el(
            "li",
            el("span.check", el("i.fas.fa-check")),
            el("span.address", walletAddress),
            el("a.remove-button", el("i.fas.fa-trash-can"), {
              click: () => {
                new Confirm({
                  title: msg("remove-wallet-address-confirm-title"),
                  message: msg("remove-wallet-address-confirm-message"),
                  cancelTitle: msg(
                    "remove-wallet-address-confirm-cancel-button",
                  ),
                  confirmTitle: msg(
                    "remove-wallet-address-confirm-remove-button",
                  ),
                  confirmColor: "#c94543",
                }, async () => {
                  await this.removeWalletAddress(walletAddress);
                });
              },
            }),
          ),
        );
      }
    } else {
      el("p.empty-message", msg("no-wallet-address-message")).appendTo(
        walletList.parent!,
        2,
      );
      walletList.delete();
    }

    for (const asset of assets) {
      const balance = user.assets?.find((a) =>
        a.chain === asset.chain && a.address === asset.address
      )?.balance ?? "0";

      assetList.append(
        el(
          "li",
          el("img.icon", { src: asset.icon }),
          el("h3.name", asset.name),
          el(
            ".balance",
            "x" + StringUtil.numberWithCommas(
              ethers.formatUnits(balance, asset.decimals ?? 0),
            ),
          ),
          el("a.trade-button", msg("asset-list-trade-button"), {
            href: asset.tradeURL,
            target: "_blank",
          }),
        ),
      );
    }

    if (user.roles && user.roles.length > 0) {
      for (const role of user.roles) {
        roleList.append(
          el(
            "li",
            el("span.color", {
              style: {
                backgroundColor: `#${
                  role.color === 0 ? "c5c9cd" : role.color.toString(16)
                }`,
              },
            }),
            role.name,
          ),
        );
      }
    } else {
      roleList.parent?.append(el("p.empty-message", msg("empty-list-message")));
      roleList.delete();
    }
  }

  public close(): void {
    this.unwatchAccount();
    this.container.delete();
    super.close();
  }
}
