import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Web3Button } from '@web3modal/react'
import { Web3Modal } from '@web3modal/react'
import { ethers } from 'ethers'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import {

  useConnect

} from "wagmi";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { connectAsync } = useConnect();
  const handleConnect = async() =>{
    // console.log("handleConnect Triggered")
    // const connector = new WalletConnectConnector({
    //   options: {
    //     qrcode: true,
    //   },
    // })
    // const { account, chain } = await connectAsync({ connector });
    // const web3modal = new Web3Modal();
    const instance = await Web3Modal;
    const provider =await new ethers.providers.Web3Provider(instance);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log("address",address)
  }

  return (
    <>
     {/* <Web3Button /> */}
     <button onClick={handleConnect}>Connect Wallet</button>
    </>
  )
}
