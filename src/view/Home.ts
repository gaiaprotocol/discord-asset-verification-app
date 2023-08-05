import { Confirm, DomNode, el, Loader, msg, View } from "common-dapp-module";
import { get } from "../_shared/edgeFunctionFetch.js";
import Config from "../Config.js";
import Layout from "./Layout.js";

export default class Home extends View {
  private container: DomNode;

  constructor() {
    super();
    Layout.append(
      this.container = el(".home-view"),
    );
    //this.init();
    this.test({
      "id": "939061865504460870",
      "username": "yj.gaia",
      "avatar": "4a840acf0daeff536d71b30221684376",
      "discriminator": "0",
      "public_flags": 4194304,
      "flags": 4194304,
      "banner": null,
      "accent_color": null,
      "global_name": "yj.gaia",
      "avatar_decoration": null,
      "banner_color": null,
      "mfa_enabled": true,
      "locale": "ko",
      "premium_type": 2,
      "email": "hanul@hanul.me",
      "verified": true,
      "wallet_addresses": [],
    });
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
      const user = await response.json();
      console.log(user);
    } else {
      console.error(await response.text());
      this.showDiscordLoginButton();
    }
  }

  private test(user: any) {
    user.wallet_addresses = [
      "0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1",
      "0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1",
      "0x8033cEB86c71EbBF575fF7015FcB8F1689d90aC1",
    ];

    const walletList = el("ul.list");
    const assetList = el("ul.list");
    const roleList = el("ul.list");

    this.container.empty().append(
      el(
        ".message-box",
        el("img", {
          src:
            `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
        }),
        el(
          ".container",
          el("h1", user.username),
          el(
            ".list-wrapper",
            el("h2", msg("wallet-list-title")),
            walletList,
            el("a.action-button", msg("add-wallet-address-button")),
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

    if (user.wallet_addresses && user.wallet_addresses.length > 0) {
      for (const walletAddress of user.wallet_addresses) {
        walletList.append(
          el(
            "li",
            el("span.check", el("i.fas.fa-check")),
            el("span.content", walletAddress),
            el("a.remove-button", el("i.fas.fa-trash-can"), {
              click: () => {
                new Confirm({
                  title: msg("remove-wallet-address-confirm-title"),
                  message: msg("remove-wallet-address-confirm-message"),
                  cancelTitle: msg("remove-wallet-address-confirm-cancel-button"),
                  confirmTitle: msg("remove-wallet-address-confirm-remove-button"),
                  confirmColor: "#c94543",
                }, () => {
                });
              },
            }),
          ),
        );
      }
    } else {
      walletList.parent?.append(
        el("p.empty-message", msg("no-wallet-address-message")),
      );
      walletList.delete();
    }

    if (user.assets && user.assets.length > 0) {
      for (const asset of user.assets) {
        walletList.append(
          el("li", asset),
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
        walletList.append(
          el("li", role),
        );
      }
    } else {
      roleList.parent?.append(el("p.empty-message", msg("empty-list-message")));
      roleList.delete();
    }
  }

  public close(): void {
    this.container.delete();
    super.close();
  }
}
