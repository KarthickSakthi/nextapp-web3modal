import '@/styles/globals.css'

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { PROJECT_ID } from '../../constants';

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECT_ID,
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
console.log("ethereumClient",ethereumClient)
export default function App({ Component, pageProps }) {
  return( 
    <>
    <WagmiConfig client={wagmiClient}>
  <Component ethereumClient={ethereumClient} pageProps={pageProps}  />
</WagmiConfig>
<Web3Modal
        projectId={PROJECT_ID}
        ethereumClient={ethereumClient}
      />
</>
  )
}
