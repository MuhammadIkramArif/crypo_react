import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const TieredSystemSection = () => {
  const list = [
    {
      title: 'Bronze',
      requirement: '1000',
      required: '3 hours before Allocation Round opens',
      whitelist: 'Like, Comment & Retweet',
      tickets: 1,
      lottery: true,
    },
    {
      title: 'Silver',
      requirement: '2500',
      required: '3 hours before Allocation Round opens',
      whitelist: 'Like, Comment & Retweet',
      tickets: 3,
      lottery: true,
    },
    {
      title: 'Gold',
      requirement: '5000',
      required: '3 hours before Allocation Round opens',
      whitelist: 'Like, Comment & Retweet',
      tickets: 7,
      lottery: true,
    },
    {
      title: 'Platinum',
      requirement: '10000',
      required: '3 hours before Allocation Round opens',
      whitelist: 'None',
      guaranteed: true,
      allocation: 'Yes',
      poolWeightState: true,
      poolWeight: '10',
    },
    {
      title: 'Diamond',
      requirement: '25000',
      required: '3 hours before Allocation Round opens',
      whitelist: 'None',
      guaranteed: true,
      allocation: 'Yes',
      poolWeightState: true,
      poolWeight: '30',
    },
    {
      title: 'Blue Diamond',
      requirement: '75000',
      required: '3 hours before Allocation Round opens',
      whitelist: 'None',
      guaranteed: true,
      allocation: 'Yes',
      poolWeightState: true,
      poolWeight: '60 + Private Allocations',
    },
  ];

  return (
    <section className='bg-color-2 text-white'>
      <Container fluid='xxl' className='px-0 position-relative'>
        <img
          className='position-absolute bottom-0 start-0 w-auto-sm-100'
          src='./assets/bg-5.png'
          alt='..'
        />
        <img
          className='position-absolute top-0 end-0 w-auto-sm-100'
          src='./assets/bg-6.png'
          alt='..'
        />
        <Container className='py-5 z-10'>
          <ScrollAnimation
            animateIn='zoomInDown'
            animateOut='zoomOutDown'
            scrollableParentSelector='#scrolly-main'
          >
            <div className='text-center'>
              <div className='heading-primary-2'>
                THE <span className='text-primary'>BSCBAY</span> TIERED SYSTEM
              </div>
              <p className='mt-3 mb-4 px-0 col-md-11 col-lg-10 mx-auto text-white-50'>
                To eradicate poverty, we need to work together. We’re building a
                suite of tools designed to help the next billion people leapfrog
                traditional banks and go straight to DeFi. We’re also making
                weekly donations through two world-class charities. Plus look
                out for community events, merchandise, and more coming your way
                soon!
              </p>
            </div>
          </ScrollAnimation>
          <div className='px-0 col-xl-9 mx-auto'>
            <div className='mb-5'>
              <ScrollAnimation
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'
                scrollableParentSelector='#scrolly-main'
              >
                <div className='heading-secondary text-center mb-4'>
                  ROUND 1 - ALLOCATION ROUND
                </div>

                <ul className='nav row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4'>
                  {list.map((item) => (
                    <li>
                      <div className='bg-secondary rounded-lg-2 d-flex flex-column icon-hover p-4 text-center'>
                        <div className='text-primary pb-3'>
                          <h4 className='mb-0 text-capitalize'>{item.title}</h4>
                        </div>
                        <div className='border-top border-bottom p-3'>
                          <ul className='nav flex-column gap-3'>
                            <li>
                              <div className='text-white-3 mb-2'>
                                Staking Requirement
                              </div>
                              <h2 className='mb-0 text-white'>
                                {item.requirement}
                              </h2>
                            </li>
                            <li>
                              <div className='text-white-3 mb-2'>
                                Staking Length Required
                              </div>
                              <h6 className='mb-0 text-white'>
                                {item.required}
                              </h6>
                            </li>
                            <li>
                              <div className='text-white-3 mb-2'>
                                Whitelist Requirement Twitter
                              </div>
                              <h6 className='mb-0 text-white text-capitalize'>
                                {item.whitelist}
                              </h6>
                            </li>
                            {item.lottery && (
                              <li>
                                <div className='text-white-3 mb-2'>
                                  Lottery Tickets
                                </div>
                                <h6 className='mb-0 text-white'>
                                  {item.tickets}
                                </h6>
                              </li>
                            )}
                            {item.guaranteed && (
                              <li>
                                <div className='text-white-3 mb-2'>
                                  Guaranteed Allocation
                                </div>
                                <h6 className='mb-0 text-white'>
                                  {item.allocation}
                                </h6>
                              </li>
                            )}

                            {item.poolWeightState && (
                              <li>
                                <div className='text-white-3 mb-2'>
                                  Pool Weight
                                </div>
                                <h6 className='mb-0 text-white'>
                                  {item.poolWeight}
                                </h6>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='mt-4 text-center text-white-3 small'>
                  In the first round, called the “Allocation Round”, users can
                  purchase the amount allotted to them based on their tier.
                </div>
              </ScrollAnimation>
            </div>

            <div>
              <ScrollAnimation
                animateIn='bounceInLeft'
                animateOut='bounceOutRight'
                scrollableParentSelector='#scrolly-main'
              >
                <div className='heading-secondary text-center mb-4'>
                  ROUND 2 - FCFS ROUND
                </div>

                <div className='row row-cols-1 row-cols-lg-2 gy-4 align-items-center'>
                  <div>
                    <img
                      className='d-block h-100 w-100'
                      src='./assets/gfx-e.png'
                      alt='...'
                    />
                  </div>
                  <div>
                    <ul className='nav flex-column gap-3'>
                      <li>
                        <p className='mb-0 small text-white-2'>
                          In round 2, the unsold tokens from the first round are
                          made available on a FCFS basis, only to guaranteed
                          tiers (Platinum and above). These members can purchase
                          an additional amount that is determined by a
                          tier-based formula. This round is open until all
                          tokens are sold, typically lasting for only a few
                          minutes. After all the tokens are sold, the IDO is
                          concluded.
                        </p>
                      </li>
                      <li>
                        <p className='mb-0 small text-white fw-bold'>
                          WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE
                          IDO STRUCTURE IN ORDER TO OPTIMIZE THE SYSTEM OVER
                          TIME AS WELL AS TAKING INTO CONSIDERATION COMMUNITY
                          FEEDBACK AND POTENTIAL DAO PROPOSALS.
                        </p>
                      </li>
                      <li>
                        <p className='mb-0 small text-white-2'>
                          Our system is a predictable and provably fair system
                          giving our users the proper incentives to accumulate
                          and hold tokens and support each and every project
                          launched. Over time, we will tweak weights, add new
                          tiers and change other parameters as necessary to keep
                          the system functional, competitive and rewarding for
                          all community members.
                        </p>
                      </li>

                      <li>
                        <p className='mb-0 small text-white-2'>
                          $BSCPAD is the next evolution of blockchain launchpads
                          solving the fundamental flaws that plague existing
                          launchpads. This platform benefits all holders of the
                          token and allows for fair launches giving traders of
                          all sizes the opportunity to invest in the best
                          upcoming Binance Smart Chain projects.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default TieredSystemSection;
