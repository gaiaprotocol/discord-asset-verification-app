import { DomNode, el, Loader, View } from "common-dapp-module";
import Config from "../Config.js";
import Layout from "./Layout.js";

export default class Home extends View {
  private container: DomNode;
  private loader: Loader;

  constructor() {
    super();
    Layout.append(
      this.container = el(".home-view", this.loader = new Loader()),
    );
    this.load();
  }

  private async load() {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!code) {
      this.showDiscordLoginButton();
    } else {
      const response = await fetch(
        `${Config.supabaseURL}/functions/v1/get-discord-access-token?code=${code}`,
        {
          headers: {
            Authorization: `Bearer ${Config.supabaseAnonKey}`,
          },
        },
      );
      if (response.status === 200) {
        const accessToken = (await response.json()).access_token;
        //TODO:
      } else {
        console.error(await response.text());
        this.showDiscordLoginButton();
      }
    }

    this.loader.delete();
  }

  private showDiscordLoginButton() {
    this.container.append(
      el(
        "a.discord-login-button",
        el("img", { src: "/images/discord-logo.svg" }),
        "Login with Discord",
        {
          href: Config.discordAuthURL,
        },
      ),
    );
  }

  public close(): void {
    this.container.delete();
    super.close();
  }
}
