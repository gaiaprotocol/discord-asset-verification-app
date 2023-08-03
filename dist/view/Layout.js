import { BodyNode, ResponsiveImage, TopBar, View, el } from "common-dapp-module";
export default class Layout extends View {
    static current;
    static append(node) {
        Layout.current.content.append(node);
    }
    container;
    content;
    constructor() {
        super();
        Layout.current = this;
        BodyNode.append(this.container = el(".layout", new TopBar({
            logo: el("h1", new ResponsiveImage("img", "/images/logo.png")),
        }), this.content = el("main"), el("footer", "BUIDL by ", el("a", "Gaia Protocol", { href: "https://gaiaprotocol.com", target: "_blank" }))));
    }
    close() {
        this.container.delete();
        super.close();
    }
}
//# sourceMappingURL=Layout.js.map