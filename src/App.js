import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAbi from "./utils/contractABI.json";

import NavHeader from "./components/NavHeader";
import Landing from "./components/Landing";
import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

import { networks } from "./utils/networks";

const CONTRACT_ADDRESS = "0x71632157F9AAC7dFE2e91184DF209e9eCB827E27";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [minted, setMinted] = useState(false);
  const [network, setNetwork] = useState("");
  const [remainingCount, setRemainingCount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}
		
		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}

    
		// This is the new part, we check the user's network chain ID
		const chainId = await ethereum.request({ method: 'eth_chainId' });
		setNetwork(networks[chainId]);

		ethereum.on('chainChanged', handleChainChanged);
		
		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload();
		}
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x13881",
                  chainName: "Polygon Mumbai Testnet",
                  rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                  nativeCurrency: {
                    name: "Mumbai Matic",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  };

  const readContract = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi.abi,
          signer
        );
      let mintCount = await contract.getRemaining();
      setRemainingCount(mintCount);
      let balance = await contract.balanceOf(currentAccount, 1);
      setMinted(balance > 0 ? true : false);
      }} catch (error) {console.log(error)}
  };

  const mintNFT = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let tx = await contract.mint();
        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          alert("Successfully minted NFT. You can check it out at ");
          setMinted(true);
          console.log(
            "Domain minted! https://mumbai.polygonscan.com/tx/" + tx.hash
          );
          setMinted(true);
        } else {
          alert("Transaction failed! Please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    readContract();
  }, [currentAccount]);

  return (
    <div className="App">
      <div className="container">
        <NavHeader network={network} currentAccount={currentAccount} />
        <Landing
          remainingCount={remainingCount}
          mintNFT={mintNFT}
          minted={minted}
          currentAccount={currentAccount}
          connectWallet={connectWallet}
          network={network}
          switchNetwork={switchNetwork}
        />
        <Works />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default App;
