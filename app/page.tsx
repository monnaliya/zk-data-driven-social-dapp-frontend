// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setIsConnected(true);
        console.log('Connected account:', userAddress);
      } catch (err) {
        console.log('Failed to connect wallet:', err);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  }

  const renderPage = () => {
    if (isConnected && account) {
      return (
        <div className="min-h-screen bg-gray-50">
          <header className="flex justify-between items-center p-6 border-b">
            <h1 className="text-2xl font-semibold">Home Page</h1>
            <p className="px-4 py-2 bg-blue-600 text-white rounded">
              {account?.slice(0, 6)}...{account?.slice(-4)}
            </p>
          </header>
    
          <main className="flex justify-center items-center h-[80vh]">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold">Inbox</h2>
              <p className="text-gray-500 mt-4">New entries and activity from your subscriptions.</p>
              <div className="mt-6 p-4 border rounded bg-white shadow">
                <p>Your inbox is empty... for now</p>
                <p className="mt-2 text-sm text-gray-500">
                  Subscribe to creators and collectors to begin your journey.
                </p>
              </div>
            </div>
          </main>
        </div>
      )
    }
  }

  const renderConnectButton = () => (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-extrabold text-center leading-tight">
        The home for web3 publishing
      </h2>
      <div className="flex space-x-4 mt-8">
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          Connect Wallet
        </button>
        <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  )

  return isConnected ? renderPage() : renderConnectButton();
}