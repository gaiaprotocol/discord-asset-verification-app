import { DomNode, View, el } from "common-dapp-module";
import Layout from "./Layout.js";

export default class Home extends View {

    private container: DomNode;

    constructor() {
        super();
        Layout.append(this.container = el(".home-view",
            "hello",
        ));
    }

    public close(): void {
        this.container.delete();
        super.close();
    }
}
