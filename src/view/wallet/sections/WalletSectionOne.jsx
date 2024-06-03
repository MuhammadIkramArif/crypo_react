import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import Web3 from 'web3';
import BSCBAYabi from '../../../shared/BSCBAYabi.json';
import CoinGecko from 'coingecko-api';

const WalletSectionOne = () => {
  const [valueSlider, setValueSlider] = React.useState(50);

  const boxArr = [
    {
      title: 'Reward Pool',
      subTitle: '12.87374',
      valueText: '$18980 USD',
    },
    {
      title: 'BNB Reward Limit',
      subTitle: '12.87374',
      valueText: '102mn BSCB',
    },

    {
      title: 'Current 1 million BSBAY Price ($)',
      subTitle: 'BNB 12.312 ',
    },

    {
      title: 'Max. Transaction Limit',
      subTitle: '100,000,000,00',
    },

    {
      title: 'Total Liquidity Pool ($)',
      subTitle: '$1,910,7373',
    },

    {
      title: 'BNB Liquidity Pool',
      subTitle: 'BNB 3,12323',
    },
  ];

  const totalArr = [
    {
      key: 0,
      title: 'BNB Earned',
      subTitle: '15.3256',
      text: 'User Claimed BNB',
    },

    {
      key: 1,
      title: 'BSCBAY Earned',
      subTitle: '205.56',
      text: 'User Reinvestment',
    },

    {
      key: 0,
      title: 'Total BNB Distributed',
      subTitle: '3568 23',
      text: 'Total BNB Claimed',
    },

    {
      key: 1,
      title: 'Total BNB Reinvest',
      subTitle: '32659',
      text: 'Total Reinvestment',
    },
  ];

  const [maxTransactionAmount, setmaxTransactionAmount] = useState(0);
  const [TotalbnbinrewardPool, setTotalbnbinrewardPool] = useState(0);
  const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);
  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [LMBalanceuser, setLMBalanceuser] = useState(0);
  const [bnbreward, setbnbreward] = useState(0);
  const [nextAvailableclaim, setnextAvailableclaim] = useState(0);
  const [user, setUser] = useState(false);
  // const [address,setaddress] = useState("");
  const [value, setValue] = useState(0);
  const [previousbnbreward, setpreviousbnbreward] = useState(0);
  const [totaldistributedBnb, settotaldistributedBnb] = useState(0);
  const [userclaimBnb, setuserclaimBnb] = useState(0);
  const [totalreinvested, settotalreinvested] = useState(0);
  const [userreinvested, setuserreinvested] = useState(0);
  const [rewardhardCap, setrewardhardCap] = useState(0);
  //  const [reinvesttokens,setreinvesttokens] = useState(0);

  var rewardshare = (
    (Number(bnbreward) / Number(TotalbnbinrewardPool)) *
    100
  ).toFixed(3);
  var priceperToken =
    (((Number(1000000) * Number(LPbnb)) / Number(LMbalanceLPpool)) *
      oneBNBprice) /
    Number(1000000);
  //  console.log("pricepertoken",priceperToken)

  function web3apis() {
    let address = window.sessionStorage.getItem('walletAddress');

    // let address = "0x008EB585B4C55fCDd030cfB0eE12cF233c4E88e8";

    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYabi;
    var contractAddress = '0x8b4202C2026C77e99f84805644bdcE2B9541598c';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.methods
      ._maxTxAmount()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setmaxTransactionAmount(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // expected reinvest token

    // contract.methods.calculateapproxReinvestToken(address,0).call().then(amount => {
    //   ////console.log(amount);
    //   var gwei = web3.utils.toBN(amount).toString();
    //   var tokens = web3.utils.toWei(gwei,"Gwei");
    //   setreinvesttokens( Number(web3.utils.fromWei(tokens, 'ether')) )
    //   }
    //   )

    // get BNB balance of reward POOl
    web3.eth
      .getBalance('0x8b4202C2026C77e99f84805644bdcE2B9541598c')
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setTotalbnbinrewardPool(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // total claimed BNb
    contract.methods
      .totalClaimedBNB()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        settotaldistributedBnb(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // user claimed BNb
    contract.methods
      .userClaimedBNB(address)
      .call()
      .then((amount) => {
        ////console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setuserclaimBnb(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // total reinvested bnb
    contract.methods
      .totalreinvested()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        settotalreinvested(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // user reinvested
    contract.methods
      .userreinvested(address)
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setuserreinvested(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get reward Hard CAP limit
    contract.methods
      .rewardHardcap()
      .call()
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setrewardhardCap(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    //     // get BNB balance of charity Pool
    //     web3.eth.getBalance("0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8")
    //     .then(balance => {
    //         ////console.log(balance);
    //         var tokens = web3.utils.toBN(balance).toString();
    //         setcharityBnb(web3.utils.fromWei(tokens, 'ether'))

    //     });

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

    //  circulating Supply LM token
    contract.methods
      .balanceOf('0x000000000000000000000000000000000000dEaD')
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        var csupply =
          Number(1000000) - Number(web3.utils.fromWei(tokens, 'ether'));
        setcirculatingSupply(csupply);
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

    // LM BALANCE user
    contract.methods
      .balanceOf(address)
      .call()
      .then((balance) => {
        ////console.log()(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setLMBalanceuser(web3.utils.fromWei(tokens, 'ether'));
      });

    contract.methods
      .calculateBNBReward(address)
      .call()
      .then((balance) => {
        ////console.log()(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setbnbreward(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // next Available Claim Date API

    contract.methods
      .nextAvailableClaimDate(address)
      .call()
      .then((time) => {
        ////console.log()(time);
        setnextAvailableclaim(time);
        if (time == 0) {
          setUser(true);
        }
      });

    //   console.log("lpbnb",LPbnb);
    //   console.log("Lm",LMbalanceLPpool);

    //   var pricep = ((( Number(1000000) * Number(LPbnb) ) / Number(LMbalanceLPpool)))/Number(1000000);
    //   setonebnb(Number(1/pricep));
  }

  useEffect(() => {
    web3apis();
  });

  boxArr[0].subTitle = TotalbnbinrewardPool.toFixed(2);
  boxArr[0].valueText =
    '$' + (oneBNBprice * TotalbnbinrewardPool).toFixed(2) + ' USD';
  boxArr[1].subTitle = rewardhardCap.toFixed(2);
  boxArr[1].valueText = '$' + (oneBNBprice * rewardhardCap).toFixed(2) + ' USD';
  boxArr[3].subTitle = maxTransactionAmount;
  boxArr[4].subTitle = (oneBNBprice * LPbnb * 2).toFixed(2);
  boxArr[5].subTitle = LPbnb.toFixed(2);
  boxArr[2].subTitle = ((1000000 * LPbnb) / LMbalanceLPpool) * oneBNBprice;

  totalArr[0].subTitle = userclaimBnb.toFixed(2) + ' BNB';
  totalArr[1].subTitle = userreinvested.toFixed(2) + ' BSCBAY';
  totalArr[2].subTitle = totaldistributedBnb.toFixed(2) + ' BNB';
  totalArr[3].subTitle = totalreinvested.toFixed(2) + ' BSCBAY';

  var rewardshare = ((bnbreward / TotalbnbinrewardPool) * 100).toFixed(3);

  // const totalArr = [
  //   {
  //     key: 0,
  //     title: 'BNB Earned',
  //     subTitle: '15.3256',
  //     text: 'User Claimed BNB',
  //   },

  const poolArr = [{}, {}, {}, {}];

  return (
    <div>
      {/* Header Start */}
      <header className='mb-4'>
        <div className='d-flex flex-wrap'>
          <div className='me-auto'>
            <div className='text-primary title-small fw-normal'>
              Your Reward Share Percentage
            </div>
            <div className='text-small'>{rewardshare} % </div>
          </div>
          {/* === */}
          <div className='text-sm-end'>
            <div className='text-small text-white-2'>
              Today BCBS <b>$1.02</b>/Million{' '}
            </div>
            <div className='text-small'>
              Claim Date: Monday. 15th June, 2021{' '}
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
      {/* Main Start */}
      <section className='d-flex flex-wrap'>
        <div className='col'>
          {/* Slider Start */}
          <div className='bg-secondary p-3 rounded-lg-2 mb-1'>
            <div className='d-flex'>
              <div className='d-flex'>
                <div className='heading-secondary-2 text-white-2 fw-500 me-2'>
                  <span className='text-primary'>BNB</span> Reward
                </div>
                <img height={60} src='./assets/w-icon-big-0.png' alt='..' />
              </div>
              <div className='d-flex ms-auto'>
                <img height={60} src='./assets/w-icon-big-1.png' alt='..' />
                <div className='heading-secondary-2 text-white-2 fw-500 ms-2'>
                  ReInvest
                </div>
              </div>
            </div>
            <div>
              <RangeSlider
                variant='warning'
                value={valueSlider}
                onChange={(e) => setValueSlider(e.target.valueSlider)}
                tooltip='off'
              />
            </div>
            <div className='d-flex'>
              <div className='d-flex'>
                <div className='title-small text-white-2 fw-500 me-2'>
                  {valueSlider}% <span className='text-primary'>BNB</span>{' '}
                  Reward
                </div>
              </div>
              <div className='d-flex ms-auto'>
                <div className='title-small text-white-2 fw-500 ms-2'>
                  {valueSlider}% Re-Invest
                </div>
              </div>
            </div>
            <div className='px-0 col-12 col-md-5 col-lg-4 col-xl-3 mx-auto mt-3'>
              <button
                type='button'
                className='px-3 py-2 w-100 btn-color border-warning'
              >
                <span className='text-uppercase title-small-1'>
                  Claim reward
                </span>
              </button>
            </div>
          </div>
          {/* Slider End */}
          <div className='d-flex flex-wrap'>
            {boxArr.map((data, i) => (
              <div key={i} className='col-12 col-md-4 p-1'>
                <button
                  type='button'
                  className='btn w-100 text-start box-hover h-100 d-flex bg-secondary p-3 justify-content-between rounded-lg-2 icon-hover-1'
                >
                  <div>
                    <img
                      className='d-block mb-1'
                      src={`/assets/w-icon-${i}.png`}
                      alt='..'
                    />
                    <div className='mb-0 title-small fw-500'>
                      {' '}
                      <div className='text-primary opacity-8 mb-1'>
                        {data.title}
                      </div>{' '}
                      <div className='mb-1 text-white-2'>
                        {new Intl.NumberFormat().format(data.subTitle)}
                      </div>{' '}
                      <div className='mb-1 text-white-3'>{data.valueText}</div>
                    </div>
                    <div className='text-white-2 text-small-1'>{data.text}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* ==== */}
        <div className='px-2 col-xxl-2 col-xl-3 col-12 my-4 my-xl-0 d-flex flex-column'>
          <div className='title-small text-primary opacity-8 fw-500 mb-2'>
            Total Earning
          </div>
          {totalArr.map((data) => (
            <div
              key={data.key}
              className='flex-fill border rounded-lg-2 p-2 border-secondary mb-2 icon-hover-4'
            >
              <img
                height={17}
                className='d-block mb-1'
                src={`/assets/w-t-${data.key}.png`}
                alt='..'
              />
              <div className='mb-0 text-small fw-500'>
                {' '}
                <div className='text-primary opacity-8 '>{data.title}</div>{' '}
                <div className=' text-white-3'>{data.subTitle}</div>
              </div>
              <div className='text-white-2 text-small-1'>{data.text}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Main End */}
      {/* Table Start */}
      {/* <section className='mt-3 mx-md-2'>
        <header className='d-flex mb-3'>
          <div className='me-auto'>
            <div className='d-flex align-items-center'>
              <img
                height={17}
                className='d-block me-2'
               src={`/assets/w-t-1.png`}
                alt='..'
              />
              <span className='title-small text-primary opacity-8'>
                BSCB Pool
              </span>
            </div>
          </div>
          <div>
            <Link className='text-light'>
              <span className='text-small fw-normal'>View All</span>
            </Link>
          </div>
        </header>
        
        {poolArr.map((data, i) => (
          <div>
            <div className='border-bottom border-light pt-2 pb-3'>
              <header>
                <ul className='nav overflow-auto flex-nowrap align-items-center justify-content-between text-small-1'>
                  <li className='col-5 col-md-auto'>
                    <div className='text-primary opacity-8 title-small-1'>
                      Earn Rabbit
                    </div>
                    <div className='text-light'>Stake Cake</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Rabbit Earned</div>{' '}
                    <div>12.10</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'> APR</div> <div>454.477%</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Total Staked</div>{' '}
                    <div>262,017 Cake</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Ends in</div>{' '}
                    <div>1,724,612 blocks</div>
                  </li>
                  <li className='col-5 col-md-auto dropdown-container'>
                    <Dropdown>
                      <Dropdown.Toggle className='p-0 text-light' variant='..'>
                        <span className='text-small fw-normal'>Details</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='position-fixed bg-dark bg-gradient'>
                        <Dropdown.Item>Reinvest</Dropdown.Item>
                        <Dropdown.Item>Claim Rewards</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </header>
            </div>
          </div>
        ))}
      </section> */}
      {/* Table End */}
    </div>
  );
};

export default WalletSectionOne;
