import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeSectionFour = () => {
  return (
    <section className='bg-b-1'>
      <Container fluid='xxl' className='px-0 position-relative'>
        <img
          className='position-absolute bottom-0 end-0 w-auto-sm-100 height-1'
          src='./assets/bg-3.gif'
          alt='..'
        />
        <Container className='py-5 z-10'>
          <ScrollAnimation
            animateIn='bounceInLeft'
            animateOut='bounceOutRight'
            scrollableParentSelector='#scrolly-main'
          >
            <div>
              {/* Heading Start */}
              <div className='mb-4'>
                <div className='heading-primary-2'>Investment Tokenomics</div>
                <div className='heading-secondary-2 text-secondary'>
                  Unprecedented Velocity | Impeccable Reliability.
                </div>
              </div>
              {/* Heading End */}
              <p className='px-0 col-xl-9 mb-4'>
                <ul className='ps-3'>
                  <li>
                    <b>$BSCB powers</b> the complete <b>BSCBay's ecosystem</b>{' '}
                    designer to strengthen the BSC network & various ongoing &
                    upcoming projects
                  </li>
                  <li>
                    <b>$BSCB works</b> on an autonomous frictionless yield
                    farming and liquidity generation protocol beautifully
                    designed to seamlessly integrate various parts of the
                    ecosystem.
                  </li>
                  <li>
                    For Investors, It's as simple as holding{' '}
                    <b> $BSCB tokens</b> in their wallet and getting more{' '}
                    <b>$BSCB & $BNB.</b> Investors can yeild daily rewards based
                    on their investment through the available Dapp.
                  </li>
                  <li>
                    <b>$BSCB is reward</b> distribution strategy works in the
                    following ways:
                  </li>
                </ul>
              </p>
              {/* ==== */}
              <div className='d-flex mb-4'>
                <div>
                  <img
                    className='pe-4 object-fit-contain'
                    height={60}
                    width={65}
                    src='./assets/rewards-0.png'
                    alt='..'
                  />
                </div>
                <div>
                  <div className='title-small fw-600 mb-1'>
                    Investment Dilution Rewards
                  </div>
                  <p className='mb-0'>
                    <ul className='nav flex-column'>
                      <li className='py-1'>
                        <img
                          className='pe-2'
                          height={12}
                          src='./assets/rewards-small.png'
                          alt='..'
                        />
                        <span>All Investors will pay 10% transaction fee</span>
                      </li>
                      <li className='py-1'>
                        <img
                          className='pe-2'
                          height={12}
                          src='./assets/rewards-small.png'
                          alt='..'
                        />
                        <span>
                          <b>4%</b> goes to BNB Reward Pool
                        </span>
                      </li>
                      <li className='py-1'>
                        <img
                          className='pe-2'
                          height={12}
                          src='./assets/rewards-small.png'
                          alt='..'
                        />
                        <span>
                          <b>4%</b> goes to liquidity
                        </span>
                      </li>
                      <li className='py-1'>
                        <img
                          className='pe-2'
                          height={12}
                          src='./assets/rewards-small.png'
                          alt='..'
                        />
                        <span>
                          <b>2%</b> is distributed among the holders
                        </span>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              {/* ==== */}
              <div className='d-flex mb-4 px-0 col-lg-9 col-xl-8 col-xxl-7'>
                <div>
                  <img
                    className='pe-4 object-fit-contain'
                    height={60}
                    width={65}
                    src='./assets/rewards-1.png'
                    alt='..'
                  />
                </div>
                <div className='flex-fill'>
                  <div className='title-small fw-600 mb-1'>
                    Stake Holders Rewards
                  </div>
                  <p className='mb-0'>
                    <ul className='nav flex-column'>
                      <li className='py-2'>
                        <div className='mb-1'>
                          ​<b>50%</b> Earnings from every project launched will
                          be distributed to investors
                        </div>
                        <ProgressBar variant='warning' now={50} />
                      </li>
                      <li className='py-2'>
                        <div className='mb-1'>
                          ​<b>50%</b> Earning of Via all Lock earnings will be
                          distributed to Investors
                        </div>
                        <ProgressBar variant='warning' now={50} />
                      </li>
                      <li className='py-2'>
                        <div className='mb-1'>
                          ​<b>30%</b> of Analytical Tie ups & Promotional
                          Earning will be distributed to Investors
                        </div>
                        <ProgressBar variant='warning' now={30} />
                      </li>
                      <li className='py-2'>
                        <div className='mb-1'>
                          ​<b>30%</b> of Mint Factory Earning will be
                          distributed to Investors.
                        </div>
                        <ProgressBar variant='warning' now={30} />
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </Container>
    </section>
  );
};

export default HomeSectionFour;
