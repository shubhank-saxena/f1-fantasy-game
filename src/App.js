import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contractAbi from "./utils/contractABI.json";
import polygonLogo from "./assets/polygonlogo.png";
import ethLogo from "./assets/ethlogo.png";
import { networks } from "./utils/networks";

import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [network, setNetwork] = useState("");

  // Implement your connectWallet method here
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      // Fancy method to request access to account.
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // Boom! This should print out public address once we authorize Metamask.
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }

    // This is the new part, we check the user's network chain ID
    const chainId = await ethereum.request({ method: "eth_chainId" });
    setNetwork(networks[chainId]);

    ethereum.on("chainChanged", handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  const mintNFT = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          "0xbc63dc090534d9ca9e4c281e04a125856e1cbd66",
          contractAbi.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let tx = await contract.mint();
        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          console.log(
            "Domain minted! https://mumbai.polygonscan.com/tx/" + tx.hash
          );
        } else {
          alert("Transaction failed! Please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {	
                  chainId: '0x13881',
                  chainName: 'Polygon Mumbai Testnet',
                  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                  nativeCurrency: {
                      name: "Mumbai Matic",
                      symbol: "MATIC",
                      decimals: 18
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
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
      alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    } 
  }

  const renderNotConnectedContainer = () => (
    <button type="button" className="btn btn-primary btn-lg" onClick={connectWallet}>
      Connect Wallet
    </button>
  );

  const renderMintButton = () => {
    if (network !== 'Polygon Mumbai Testnet') {
      return (
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={switchNetwork}
        >
          Click to Switch to Polygon Network
        </button>
      );
    }
    return (
      <>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={mintNFT}
        >
          Mint your NFT!
        </button>
      </>
    );
  };

  // Header Component

  const renderHeader = () => {
    return (
      <>
        <header id="header" className="header">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>WeRace</span>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li className="d-flex">
                  <img
                    alt="Network logo"
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                    }}
                    className="logo"
                    src={network.includes("Polygon") ? polygonLogo : ethLogo}
                  />
                  <div style={{ marginTop: "5px" }}>
                    {currentAccount ? (
                      <p>
                        {" "}
                        Wallet: {currentAccount.slice(0, 6)}...
                        {currentAccount.slice(-4)}{" "}
                      </p>
                    ) : (
                      <button type="button" className="btn btn-danger">Wallet Not Connected</button>
                    )}
                  </div>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </>
    );
  };

  // This runs our function when the page loads.
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <div className="container">
        {renderHeader()}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>Wager on your favourite driver/team for the race weekend</h1>
              <h2>
                Place your wager in a pool for the race. Win exclusive race day
                NFTs and win tokens.
              </h2>
              <br />
              <h5>Mint an exclusive DAO for added benefits!</h5>
              <br />
              <div className="text-center text-lg-start">
                {!currentAccount && renderNotConnectedContainer()}
                {currentAccount && renderMintButton()}
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-secondary btn-lg">
                  How to mint?
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://lh3.googleusercontent.com/cALyqUNCp_IJ-QqCDO1Beg8EmFLfIAxMGn9Qtugs7sfGmFZi5lxPsq-c_xl3CSO42vH6gl6LSO-iOWJ1GeCESvoNtef-6Cvm9VIdXQ=w600"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </section>
        <Works />
        <Timeline />
      </div>
      <Footer />
    </>
  );
}

export default App;
