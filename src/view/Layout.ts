import { BodyNode, DomNode, ResponsiveImage, TopBar, View, el } from "common-dapp-module";

export default class Layout extends View {

    private static current: Layout;

    public static append(node: DomNode): void {
        Layout.current.content.append(node);
    }

    private container: DomNode;
    private content: DomNode;

    constructor() {
        super();
        Layout.current = this;

        BodyNode.append(this.container = el(".layout",
            new TopBar({
                logo: el("h1",
                    new ResponsiveImage("img", "/images/logo.png"),
                ),
            }),
            this.content = el("main"),
            el("footer",
                "BUIDL by ",
                el("a", "Gaia Protocol", { href: "https://gaiaprotocol.com", target: "_blank" }),
            ),
        ));
    }

    public close(): void {
        this.container.delete();
        super.close();
    }
}
