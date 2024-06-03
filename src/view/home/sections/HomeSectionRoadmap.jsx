import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeSectionRoadmap = () => {
  return (
    <section className='py-5 bg-b-1'>
      <Container>
        <div className='text-center'>
          <ScrollAnimation
            animateIn='zoomInDown'
            animateOut='zoomOutDown'
            scrollableParentSelector='#scrolly-main'
          >
            <div className='heading-primary-2'>Roadmap</div>
            <p className='mt-3 mb-4 px-0 col-md-11 col-lg-10 mx-auto'>
              To eradicate poverty, we need to work together. We’re building a
              suite of tools designed to help the next billion people leapfrog
              traditional banks and go straight to DeFi. We’re also making
              weekly donations through two world-class charities. Plus look out
              for community events, merchandise, and more coming your way soon!
            </p>
          </ScrollAnimation>
          <div className='px-0 col-lg-10 mx-auto mb-5 pb-md-5'>
            {/* Box-1 */}
            <div className='row justify-content-center pt-4'>
              <div className='col col-md-5 order-md-1 d-none d-md-block'>
                <ScrollAnimation
                  animateIn='bounceInLeft'
                  animateOut='bounceOutLeft'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-end heading-secondary-2 fw-600'>
                    15 April 2021
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-2 px-0 order-first order-md-2 col-md-1 position-relative'>
                <div>
                  <img src='/assets/timeline.png' alt='timeline' />
                </div>
                <div
                  className='bg-primary h-100 mx-auto'
                  style={{ width: 4 }}
                />
              </div>
              <div className='col col-md-5 order-md-3'>
                <ScrollAnimation
                  animateIn='bounceInRight'
                  animateOut='bounceOutRight'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-start mb-3 heading-secondary-2 fw-600 mb d-md-none'>
                    15 April 2021
                  </div>
                  <div className='timeline-box bg-secondary p-3 text-start'>
                    <div className='heading-secondary-2 fw-600 text-primary mb-1'>
                      Q-2
                    </div>
                    <div className='heading-secondary-3 fw-600 text-white mb-2'>
                      Protocol Initialized
                    </div>
                    <ul className='ps-3 text-small text-white-3'>
                      <li className='my-1'> $HAPPY Launch</li>
                      <li className='my-1'>First Donation (Watch)</li>
                      <li className='my-1'>Influencer Marketing</li>
                      <li className='my-1'>Community AMA</li>
                      <li className='my-1'>Community Contests</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-2 */}
            <div className='row justify-content-center pt-4'>
              <div className='col col-md-5 order-md-1'>
                <ScrollAnimation
                  animateIn='bounceInLeft'
                  animateOut='bounceOutLeft'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-start mb-3 heading-secondary-2 fw-600 mb d-md-none'>
                    15 Augest 2021
                  </div>
                  <div className='timeline-box bg-secondary p-3 text-start'>
                    <div className='heading-secondary-2 fw-600 text-primary mb-1'>
                      Q-3
                    </div>
                    <div className='heading-secondary-3 fw-600 text-white mb-2'>
                      Migration
                    </div>
                    <ul className='ps-3 text-small text-white-3'>
                      <li className='my-1'> $HAPPY Launch</li>
                      <li className='my-1'>First Donation (Watch)</li>
                      <li className='my-1'>Influencer Marketing</li>
                      <li className='my-1'>Community AMA</li>
                      <li className='my-1'>Community Contests</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-2 px-0 order-first order-md-2 col-md-1 position-relative'>
                <div>
                  <img src='/assets/timeline.png' alt='timeline' />
                </div>
                <div
                  className='bg-primary h-100 mx-auto'
                  style={{ width: 4 }}
                />
              </div>
              <div className='col col-md-5 order-md-3 d-none d-md-block'>
                <ScrollAnimation
                  animateIn='bounceInRight'
                  animateOut='bounceOutRight'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-start heading-secondary-2 fw-600'>
                    15 Augest 2021
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-2 */}
            <div className='row justify-content-center pt-4'>
              <div className='col col-md-5 order-md-1 d-none d-md-block'>
                <ScrollAnimation
                  animateIn='bounceInLeft'
                  animateOut='bounceOutLeft'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-end heading-secondary-2 fw-600'>
                    15 November 2021
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-2 px-0 order-first order-md-2 col-md-1 position-relative '>
                <div>
                  <img src='/assets/timeline.png' alt='timeline' />
                </div>
                <div
                  className='bg-primary h-100 mx-auto'
                  style={{ width: 4 }}
                />
              </div>
              <div className='col col-md-5 order-md-3'>
                <ScrollAnimation
                  animateIn='bounceInRight'
                  animateOut='bounceOutRight'
                  scrollableParentSelector='#scrolly-main'
                >
                  <div className='text-start mb-3 heading-secondary-2 fw-600 mb d-md-none'>
                    15 November 2021
                  </div>
                  <div className='timeline-box bg-secondary p-3 text-start'>
                    <div className='heading-secondary-2 fw-600 text-primary mb-1'>
                      Q-4
                    </div>
                    <div className='heading-secondary-3 fw-600 text-white mb-2'>
                      Launch G-2
                    </div>
                    <ul className='ps-3 text-small text-white-3'>
                      <li className='my-1'> $HAPPY Launch</li>
                      <li className='my-1'>First Donation (Watch)</li>
                      <li className='my-1'>Influencer Marketing</li>
                      <li className='my-1'>Community AMA</li>
                      <li className='my-1'>Community Contests</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-3 */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSectionRoadmap;
