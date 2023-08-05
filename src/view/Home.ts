import {
  configureChains,
  createConfig,
  getAccount,
  signMessage,
  watchAccount,
} from "@wagmi/core";
import { ethers } from "ethers";
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
  Loader,
  msg,
  StringUtil,
  View,
} from "common-dapp-module";
import { get } from "../_shared/edgeFunctionFetch.js";
import Config from "../Config.js";
import Layout from "./Layout.js";
import assets from "../_shared/assets.js";

export default class Home extends View {
  private container: DomNode;
  private web3modal: Web3Modal;
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

    //this.init();

    //test
    this.user = {
      id: "1234567890",
      nickname: "Test User",
      avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
      walletAddresses: ["0x1234567890"],
      assets: [{
        chain: "ethereum",
        address: "0xeACB1E79425236dAcd5Df3D0bd3F73e3dc6fb11e",
        balance: "100000000000000000000",
      }, {
        chain: "ethereum",
        address: "0x134590ACB661Da2B318BcdE6b39eF5cF8208E372",
        balance: "12",
      }],
      roles: [{ name: "Test Role", color: 0 }],
    };
  }

  private async init() {
    this.showLoader();
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      this.showDiscordLoginButton();
    } else {
      const response = await get(`get-discord-access-token?code=${code}`);
      if (response.status === 200) {
        const accessToken = (await response.json()).access_token;
        this.loadUser(accessToken);
      } else {
        console.error(await response.text());
        this.showDiscordLoginButton();
      }
    }
  }

  private showLoader() {
    this.container.empty().append(new Loader());
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

  private async loadUser(accessToken: string) {
    const response = await get(`get-discord-user?access_token=${accessToken}`);
    if (response.status === 200) {
      this.user = await response.json();
    } else {
      console.error(await response.text());
      this.showDiscordLoginButton();
    }
  }

  private async addWalletAddress() {
    const result = await signMessage({
      message: "Hello, world!",
    });
    console.log(result);
    this.web3modal.closeModal();
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
                }, () => {
                  // TODO
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

    if (user.assets && user.assets.length > 0) {
      for (const asset of user.assets) {
        const assetInfo = assets[`${asset.chain}-${asset.address}`];
        assetList.append(
          el(
            "li",
            el("img.icon", { src: assetInfo.icon }),
            el("h3.name", assetInfo.name),
            el(
              ".balance",
              "x" + StringUtil.numberWithCommas(
                ethers.formatUnits(asset.balance, assetInfo.decimals ?? 0),
              ),
            ),
            el("a.trade-button", msg("asset-list-trade-button"), {
              href: assetInfo.tradeURL,
              target: "_blank",
            }),
          ),
        );
      }
    } else {
      assetList.parent?.append(
        el("p.empty-message", msg("empty-list-message")),
      );
      assetList.delete();
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
