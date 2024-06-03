import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Web3Modal from 'web3modal';
// import Cookies from 'universal-cookie';

import Web3 from 'web3';
import BSCBAYabi from '../shared/BSCBAYabi.json';

// import contractService from '../../shared/LMcontractservice'
import WalletConnectProvider from '@walletconnect/web3-provider';

import CoinGecko from 'coingecko-api';

// icons
import { ReactComponent as BNBIcon } from '../assets/BNBIcon.svg';
import { ReactComponent as Menu } from '../assets/sidebar-icons/menu.svg';
import { ReactComponent as Icon0 } from '../assets/sidebar-icons/icon-0.svg';
import { ReactComponent as Icon1 } from '../assets/sidebar-icons/icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/sidebar-icons/icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/sidebar-icons/icon-3.svg';
import { ReactComponent as Icon4 } from '../assets/sidebar-icons/icon-4.svg';
import { ReactComponent as Icon5 } from '../assets/sidebar-icons/icon-5.svg';

export const Sidebar = () => {
  const [LMBalanceuser, setLMBalanceuser] = useState(0);
  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);

  const [show, setShow] = React.useState(false);
  const linksArr = [
    { link: '/', icon: <Icon0 />, name: 'Homepage' },
    { icon: <Icon1 />, name: 'Wallet', className: 'active' },
    { icon: <Icon2 />, name: 'Documentation' },
    { icon: <Icon3 />, name: 'Contract' },
    { icon: <Icon4 />, name: 'Reports & Charts' },
    { icon: <Icon5 />, name: 'Disclaimeer' },
  ];

  const socialMediaArr = [
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
  ];

  var priceperToken =
    (((1000000 * LPbnb) / LMbalanceLPpool) * oneBNBprice) / 1000000;
  var address = window.sessionStorage.getItem('walletAddress');

  function web3apis() {
    // let address = window.sessionStorage.getItem("walletAddress");

    address = window.sessionStorage.getItem('walletAddress');

    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYabi;
    var contractAddress = '0x8b4202C2026C77e99f84805644bdcE2B9541598c';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // LM BALANCE user
    contract.methods
      .balanceOf(address)
      .call()
      .then((balance) => {
        ////console.log()(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setLMBalanceuser(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get token in LP
    contract.methods
      .balanceOf('0xDd25d5c356Ff41feB5846c6E2960995925ED7938')
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setLMbalanceLPpool(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get TotalBNB in liquidity Pool
    var wrappednBNBABI = [
      {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ];
    var wrappedBNBcontractAddress =
      '0xae13d989dac2f0debff460ac112a837c89baa7cd';

    var wrappedBNBcontract = new web3.eth.Contract(
      wrappednBNBABI,
      wrappedBNBcontractAddress
    );

    wrappedBNBcontract.methods
      .balanceOf('0xDd25d5c356Ff41feB5846c6E2960995925ED7938')
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLPbnb(Number(web3.utils.fromWei(tokens, 'ether')));
        //console.log("lpbnb",LPbnb);
      });

    // fetch latest 1 BNB price
    const CoinGeckoClient = new CoinGecko();
    // fetch price of 1 BNB
    CoinGeckoClient.simple
      .price({
        ids: ['binancecoin'],
        vs_currencies: ['usd'],
      })
      .then((data) => {
        setoneBNBprice(Number(data.data.binancecoin.usd));
      });
  }

  useEffect(() => {
    web3apis();
  });

  async function logoutUser() {
    if (window.sessionStorage.getItem('walletName') == 'walletconnect') {
      // const providerOptions = {
      //   walletconnect: {
      //     package: WalletConnectProvider, // required
      //     options: {
      //      rpc: {
      //            1 : "https://bsc-dataseed.binance.org/",
      //            56: "https://bsc-dataseed.binance.org/",
      //            97: "https://data-seed-prebsc-1-s1.binance.org:8545"
      //        // ...
      //      },
      //       //infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
      //     }
      //   }
      // };

      // const web3Modal = new Web3Modal({
      //  //  network: "mainnet", // optional
      //   cacheProvider: true, // optional
      //   providerOptions // required
      // });

      // await web3Modal.clearCachedProvider();
      // // await web3Modal.close();

      //   ---------------working code ------------------
      const provider = new WalletConnectProvider({
        rpc: {
          1: 'https://bsc-dataseed.binance.org/',
          56: 'https://bsc-dataseed.binance.org/',
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        },
      });

      await provider.disconnect();
      /// --------------------------------------------
    }

    localStorage.removeItem('provider');
    window.sessionStorage.removeItem('walletAddress');
    window.sessionStorage.removeItem('walletName');
    window.location.assign('/');
  }

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        type='button'
        className='sidebar-btn rounded-circle btn  btn-color'
      >
        <Menu />
      </button>
      <section
        className={`sidebar-width  ${show ? 'sidebar-show' : 'sidebar-hide'}`}
      >
        {/* Logo */}
        <div className='mb-4'>
          <Link to='/'>
            <img height={45} src='./assets/logo.png' alt='Logo' />
          </Link>
        </div>
        {/* Sidebar */}
        <div className='sidebar-container text-white p-4 text-truncate'>
          <div>
            <ul className='nav flex-column'>
              {linksArr.map((data) => (
                <li className='nav-item pb-3'>
                  <Link
                    exact
                    className={`nav-link ${data.className}`}
                    to={data.link}
                  >
                    <div className='d-flex'>
                      <span className='me-2'>{data.icon}</span>
                      <span>{data.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className='nav flex-column px-3'>
              <li className='nav-item py-3'>
                <div>
                  <div className='text-primary heading-secondary-3'>
                    Your Balance
                  </div>
                  <div className='title-small fw-normal'>
                    BSCB {LMBalanceuser.toFixed(2)}
                  </div>
                </div>
              </li>
              <li className='nav-item py-3'>
                <p className='mb-0 '>
                  <div className='text-light'>Your Address</div>
                  <div className='text-truncate'>
                    {' '}
                    {address.slice(0, 20) + '. . .'}{' '}
                  </div>
                </p>
              </li>
              <li className='nav-item py-3 w-100 align-self-baseline'>
                <Link className='btn py-2 btn-outline-primary'>
                  <i className='me-2' style={{ height: 30, width: 20 }}>
                    <BNBIcon />
                  </i>
                  <div className='text-uppercase title-small-1'>Buy bcsb</div>
                </Link>
                <div className='text-white-2 text-small-1 mt-2'>
                  5% Fee on Reward Extraction
                </div>
              </li>
            </ul>
            <div className='mt-5 px-3'>
              <Link onClick={logoutUser}>
                <img src='/assets/logout.png' alt='logout' />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <Row
          className='justify-content-lg-center z-10 pt-4 mx-0'
          style={{ opacity: 0.7 }}
        >
          {socialMediaArr.map((data, i) => (
            <a
              key={i}
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='mx-2 d-flex justify-content-center icon-hover-3 '
            >
              <img
                className='d-block'
                height={18}
                width={18}
                src={`/assets/icons/b-icon-${i}.svg`}
                alt='..'
              />
            </a>
          ))}
        </Row>
      </section>
    </>
  );
};
