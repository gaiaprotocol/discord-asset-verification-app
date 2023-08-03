import { Router } from "common-dapp-module";
import Home from "./view/Home.js";
import Layout from "./view/Layout.js";
(async () => {
    if (sessionStorage.__spa_path) {
        Router.goNoHistory(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    Router.route("**", Layout);
    Router.route("", Home);
})();
//# sourceMappingURL=main.js.map