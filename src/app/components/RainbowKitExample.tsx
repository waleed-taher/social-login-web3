"use client"
import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { 
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
  } from '@zerodevapp/wagmi/rainbowkit'
  import {
    RainbowKitProvider,
    ConnectButton
  } from '@rainbow-me/rainbowkit';
  import { configureChains, createClient, WagmiConfig } from 'wagmi';
  import { polygonMumbai} from 'wagmi/chains';
  import { connectorsForWallets } from '@rainbow-me/rainbowkit'
  import { publicProvider } from 'wagmi/providers/public';

const RainbowKitExample = () => {
  const connectors = connectorsForWallets([
    {
      groupName: 'Social',
      wallets: [
        googleWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }}),
        facebookWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }}),
        githubWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }}),
        discordWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }}),
        twitchWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }}),
        twitterWallet({options: { projectId: "4ed8595f-dc12-4767-b32e-b82f1e32115e" }})
      ],
    },
  ]);
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()],
  )

    const client = createClient({
      autoConnect: false,
      connectors,
      provider,
      webSocketProvider,
    })
   
    
    return (
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains} modalSize={'compact'}>
            <ConnectButton />
        </RainbowKitProvider>
    </WagmiConfig>
    )
  }

export default RainbowKitExample