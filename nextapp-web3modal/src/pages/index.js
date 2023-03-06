import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { EthereumProvider } from '@walletconnect/ethereum-provider';
import UniversalProvider from "@walletconnect/universal-provider";
import { ethers } from 'ethers';
import { PROJECT_ID } from '../../constants';
import { Web3Button } from "@web3modal/react";
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })
import { useProvider } from 'wagmi'


export default function Home({ethereumClient}) {
  // console.log("Home", ethereumClient)
  const provider = useProvider()
  useEffect( ()=>{
    activateEtherProvider()
  },[])

  const  activateEtherProvider = async()=>{
    
    const web3Provider = new ethers.providers.Web3Provider(provider);
    // const provider =await new ethers.providers.Web3Provider(web3provider);
    const signer = await web3Provider.getSigner();
    const address = await signer.getAddress();
    console.log("address",address)

  }
  // const handleConnect = async() =>{
  //   // const web3provider = await EthereumProvider.init({
  //   //   projectId: PROJECT_ID,
  //   //   chains: ["80001"]
  //   // })

  //   // const web3Modal = new Web3Modal({
  //   //   projectId: PROJECT_ID,
  //   // });
    
  //   // console.log("handleConnect Triggered")
  //   // const connector = new WalletConnectConnector({
  //   //   options: {
  //   //     qrcode: true,
  //   //   },
  //   // })
  //   // const { account, chain } = await connectAsync({ connector });
  //   // const web3modal = new Web3Modal();
  //   // await web3provider.connect({chains: ["80001"]});
  //   // await web3provider.request({ method: "eth_requestAccounts" });

  //   // const provider = await UniversalProvider.init({
  //   //   logger: "info",
  //   //   projectId: PROJECT_ID,
  //   //   metadata: {
  //   //     name: "React App",
  //   //     description: "React App for WalletConnect",
  //   //     url: "https://walletconnect.com/",
  //   //     icons: ["https://avatars.githubusercontent.com/u/37784886"],
  //   //   },
  //   //   client: undefined, // optional instance of @walletconnect/sign-client
  //   // });
    
  //   // //  create sub providers for each namespace/chain
  //   // await provider.connect({
  //   //   namespaces: {
  //   //     eip155: {
  //   //       methods: [
  //   //         "eth_sendTransaction",
  //   //         "eth_signTransaction",
  //   //         "eth_sign",
  //   //         "personal_sign",
  //   //         "eth_signTypedData",
  //   //       ],
  //   //       chains: ["80001"],
  //   //       events: ["chainChanged", "accountsChanged"],
  //   //       rpcMap: {
  //   //         80001:
  //   //           `https://rpc.walletconnect.com?chainId=eip155:80001&projectId=${PROJECT_ID}`,
  //   //       },
  //   //     },
  //   //     // pairingTopic: "<123...topic>", // optional topic to connect to
  //   //     skipPairing: false, // optional to skip pairing ( later it can be resumed by invoking .pair())
  //   //   },
  //   // });
    
  //   //  Create Web3 Provider
  //   const web3Provider = new ethers.providers.Web3Provider(provider);
  //   // const provider =await new ethers.providers.Web3Provider(web3provider);
  //   const signer = await web3Provider.getSigner();
  //   const address = await signer.getAddress();
  //   console.log("address",address)
  // }

  return (
    <>
     {/* <Web3Button /> */}
     {/* <button onClick={handleConnect}>Connect Wallet</button> */}
      <Web3Button />
    </>
  )
}
