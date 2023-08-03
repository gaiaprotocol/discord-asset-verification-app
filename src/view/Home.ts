import { DomNode, View, el } from "common-dapp-module";
import Layout from "./Layout.js";
import Config from "../Config.js";

export default class Home extends View {

    private container: DomNode;

    constructor() {
        super();
        Layout.append(this.container = el(".home-view",
            String(Config.devMode),
        ));
    }

    public close(): void {
        this.container.delete();
        super.close();
    }
}
