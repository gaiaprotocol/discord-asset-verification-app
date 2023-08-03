import { DomNode, View, el } from "common-dapp-module";
import Config from "../Config.js";
import Layout from "./Layout.js";

export default class Home extends View {

    private container: DomNode;

    constructor() {
        super();
        Layout.append(this.container = el(".home-view",
            String(Config.devMode),
        ));
        this.load();
    }

    private async load() {
        const code = new URLSearchParams(window.location.search).get("code");

        if (!code) {
            this.showDiscordLoginButton();
        } else {
            const response = await fetch(`${Config.supabaseURL}/functions/v1/get-discord-user?code=${code}`, {
                headers: {
                    Authorization: `Bearer ${Config.supabaseAnonKey}`,
                },
            });
            if (response.status === 200) {
                console.log(await response.json());
            } else {
                console.error(await response.text());
                this.showDiscordLoginButton();
            }
        }
    }

    private showDiscordLoginButton() {
        this.container.append(el("a", "Login with Discord", {
            href: Config.discordAuthURL,
        }));
    }

    public close(): void {
        this.container.delete();
        super.close();
    }
}
