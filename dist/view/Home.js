import { View, el } from "common-dapp-module";
import Layout from "./Layout.js";
export default class Home extends View {
    container;
    constructor() {
        super();
        Layout.append(this.container = el(".home-view", "Home"));
    }
    close() {
        this.container.delete();
        super.close();
    }
}
//# sourceMappingURL=Home.js.map