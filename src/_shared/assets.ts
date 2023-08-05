// key is `${chain}-${address}`
const assets: {
  [key: string]: {
    name: string;
    symbol: string;
    decimals?: number;
    icon: string;
    tradeURL: string;
  };
} = {
  "ethereum-0xeACB1E79425236dAcd5Df3D0bd3F73e3dc6fb11e": {
    name: "GaiaToken",
    symbol: "GAIA",
    decimals: 18,
    icon: "/images/gaiatoken.jpg",
    tradeURL: "https://gaiadex.com",
  },
  "ethereum-0x134590ACB661Da2B318BcdE6b39eF5cF8208E372": {
    name: "The Gods",
    symbol: "GOD",
    icon: "/images/gods.jpg",
    tradeURL: "https://opensea.io/collection/gaia-protocol-gods",
  },
};

export default assets;
