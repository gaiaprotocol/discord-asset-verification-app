import { Router, msg } from "common-dapp-module";
import Home from "./view/Home.js";
import Layout from "./view/Layout.js";
export default async function install() {
    if (sessionStorage.__spa_path) {
        Router.goNoHistory(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    await msg.loadYAMLs({
        en: ["/locales/en.yml"],
    });
    Router.route("**", Layout);
    Router.route("", Home);
}
//# sourceMappingURL=install.js.map