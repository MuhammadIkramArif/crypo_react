import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import contractService from '../../shared/LMcontractservice';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Web3 from 'web3';

const LaunchStepThree = ({ show, onHide }) => {
  async function requestAuth() {
    try {
      console.log('Metamask auth requested');

      localStorage.setItem('loginType', 'metamask');

      const web3 = await contractService.getWeb3Client();
      // const accounts = await web3.eth.getAccounts();
      await this.userLogin(web3);
    } catch (e) {
      console.error(e);
    }
  }

  async function requestwalletconnect() {
    try {
      console.log('walletconnect auth requested');

      localStorage.setItem('loginType', 'walletconnect');

      const web3 = await contractService.getWeb3Client();

      // await this.userLogin(web3);
    } catch (e) {
      console.error(e);
    }
  }

  async function requestAuthBSC() {
    try {
      console.log('Metamask auth requested');

      localStorage.setItem('loginType', 'binance');

      const web3 = await contractService.getWeb3Client();
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0]);
      await this.userLogin(web3);
      // await this.userLogin(web3);
      // window.location.reload();
    } catch (e) {
      console.error(e);
    }
  }

  //  async function requestwalletconnect()
  //  {

  //   try {

  //   //   console.log("wallet wallect auth requested");
  //   //   localStorage.setItem("loginType", "walletconnect");
  //   //   const providerOptions = {
  //   //    walletconnect: {
  //   //      package: WalletConnectProvider, // required
  //   //      options: {
  //   //       rpc: {
  //   //             1 : "https://bsc-dataseed.binance.org/",
  //   //             56: "https://bsc-dataseed.binance.org/",
  //   //             97: "https://data-seed-prebsc-1-s1.binance.org:8545"
  //   //         // ...
  //   //       },
  //   //        //infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
  //   //      }
  //   //    }
  //   //  };

  //   //  const web3Modal = new Web3Modal({
  //   //   //  network: "mainnet", // optional
  //   //    cacheProvider: false, // optional
  //   //    providerOptions // required
  //   //  });

  //   // //  await web3Modal.clearCachedProvider();
  //   //  const provider = await web3Modal.connect();

  //   //  const web3 = new Web3(provider);

  //   // ------------------
  //       const provider = new WalletConnectProvider({

  //               rpc: {
  //                1 : "https://bsc-dataseed.binance.org/",
  //                56: "https://bsc-dataseed.binance.org/",
  //                97: "https://data-seed-prebsc-1-s1.binance.org:8545"
  //              },
  // //             infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
  //           });

  //            //   //  Enable session (triggers QR Code modal)
  //          await provider.enable();
  //          const web3 = new Web3(provider);
  //          var id = await web3.eth.net.getId();
  //     console.log("networkid", id);

  //    await userLogin(web3);

  //  // -----------------

  //   //   console.log("walletconnect auth requested");

  //   //   localStorage.setItem("loginType", "walletconnect");

  //   //   const web3 = await contractService.getWeb3Client();

  //   // await userLogin(web3);
  // }

  //  catch (e) {
  //     console.error(e);
  // }
  // };

  async function userLogin(web3) {
    const accounts = await web3.eth.getAccounts();
    const providerName = localStorage.getItem('loginType');
    let loginType = localStorage.getItem('loginType');

    const networkId = await web3.eth.net.getId();

    console.log('User login params => ', accounts, networkId);
    window.sessionStorage.setItem('walletAddress', accounts[0]);
    window.sessionStorage.setItem('walletName', providerName);

    window.location.assign('/wallet');
  }

  return (
    <Modal centered show={show} onHide={onHide} contentClassName='border-0'>
      <section className='flex-fill bg-color-5 text-white d-flex align-items-center justify-content-center position-relative'>
        <div className='bg-secondary rounded-lg-2 px-md-5 px-1 py-4 w-100 text-center'>
          <div className='my-4 d-flex align-items-baseline justify-content-center'>
            <img src='/assets/wallet.png' alt='...' />
          </div>
          <div className='text-primary heading-secondary-2 fw-bold mb-2'>
            Choose Wallet
          </div>
          <p className='mb-3 fw-light text-white-2'>
            Safely connect to your existing blockchain wallet and directly stake
            tokens in them
          </p>
          <Link
            onClick={requestAuth}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/e-icon-0.png'
              alt='...'
            />
            <span className='ms-3 text-white-2'>Meta Mask</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestAuthBSC}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/BinanceChainWallet.jpeg'
              alt='...'
            />
            <span className='ms-3 text-white-2'> Binance Chain Wallet</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestAuth}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/trust.png'
              alt='...'
            />
            <span className='ms-3 text-white-2'>Trust Wallet</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestAuth}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/safepal.jpg'
              alt='...'
            />
            <span className='ms-3 text-white-2'>Safepal Wallet</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestAuth}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/tokenpocket.png'
              alt='...'
            />
            <span className='ms-3 text-white-2'>TokenPocket Wallet</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestAuth}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/MathWallet.jpeg'
              alt='...'
            />
            <span className='ms-3 text-white-2'>Math Wallet</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
          <br></br>
          <Link
            onClick={requestwalletconnect}
            className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
          >
            <img
              className='d-block'
              height={45}
              src='./assets/wc.png'
              alt='...'
            />
            <span className='ms-3 text-white-2'>Wallet Connect</span>
            <img
              className='ms-auto shake-horizontal'
              src='./assets/arrow-1.png'
              alt='...'
            />
          </Link>
        </div>
      </section>
    </Modal>
  );
};

export default LaunchStepThree;
