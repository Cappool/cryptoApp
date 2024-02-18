// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureOne from "./components/FeatureOne.jsx";

import Tokenomics from "./components/Tokenomics.jsx";
// import SocialMediaPromotion from "./components/SocialMediaPromotion";
import DevSection from "./components/DevSection.jsx";

import RoadMap from "./components/RoadMap.jsx";

import FAQ from "./components/FAQ.jsx";
import FeatureTwo from "./components/FeatureTwo.jsx";
import Staking from "./components/staking.jsx";
import "./i18n.js";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { bsc, bscTestnet } from "viem/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, bscTestnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.REACT_APP_PROJECT_ID,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

function App() {
  // const features = [
  //   {
  //     src: wallet1,
  //     title: "Value",
  //     description:
  //       "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
  //   },
  //   {
  //     src: profit1,
  //     title: "Yield",
  //     description:
  //       "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
  //   },
  //   {
  //     src: insurance1,
  //     title: "Insurance",
  //     description: "Get Impermanent Loss Protection on your Liquidity Pools",
  //   },
  //   {
  //     src: wallet1,
  //     title: "Staking",
  //     description:
  //       "Earn Yield on your Native Assets with Impermanent Loss Protection",
  //   },
  // ];
  return (
    <WagmiConfig config={config}>
      <div className="home">
        {/* <Router>
        <Header />
        <Routes>
          <Route path="/" component={<HeroSection />} />
          <Route path="/about" component={<FeatureOne />} />
          <Route path="/about2" component={<FeatureTwo />} />
          <Route path="/tokenomics" component={<Tokenomics />} />
          <Route path="/how-to-buy" component={<DevSection />} />
          <Route path="/roadmap" component={<RoadMap />} />
        </Routes>
      </Router> */}
        {/* <DailyStats /> */}
        {/* <Route path="about" element={<FeatureOne />} />
        <Route path="about2" element={<FeatureTwo />} /> */}
        {/* <div className="features-list-container">
        {features.map((feature, index) => {
          return (
            <Card key={index} title={feature.title} imgUrl={feature.src}>
              {<p>{feature.description}</p>}
            </Card>
          );
        })}
      // </div> */}
        {/* // <Route path="tokenomics" element={<Tokenomics />} />
      //   <Route path="how-to-buy" element={<DevSection />} />

      //   <Route path="roadmap" element={<RoadMap />} />
      // </Routes> */}
        {/*// </Router>*/}
        <Header />
        <div className="scroll">
          <HeroSection />
          <FeatureOne />
          <FeatureTwo />
          <Tokenomics />
          <DevSection />
          <RoadMap />
          <Staking />
          <FAQ />
        </div>
        {/* <SocialMediaPromotion /> */}
        {/* <BlogSection /> */}
      </div>
    </WagmiConfig>
  );
}

export default App;
