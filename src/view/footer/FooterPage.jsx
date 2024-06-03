import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const FooterPage = () => {
  var link;

  const location = useLocation();

  const hideFooter =
    location.pathname === '/wallet/step-one' ||
    location.pathname === '/wallet/step-two' ||
    location.pathname === '/wallet/step-three' ||
    location.pathname === '/wallet';

  if (hideFooter) {
    return null;
  }

  const socialMediaArr = [
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
  ];

  let address = window.sessionStorage.getItem('walletAddress');

  if (address) {
    console.log('yes');

    link = (
      <Link className='nav-link' to='/wallet'>
        Launch app
      </Link>
    );
  } else {
    console.log('no');

    link = (
      <Link className='nav-link' to='/wallet/step-two'>
        Launch app
      </Link>
    );
  }

  return (
    <footer className='bg-color-2 text-white py-5'>
      <ScrollAnimation
        animateIn='zoomInUp'
        animateOut='zoomOutDown'
        scrollableParentSelector='#scrolly-main'
      >
        <Container fluid='xxl' className='px-0 position-relative'>
          <img className='position-absolute' src='/assets/bg-7.png' alt='..' />
          <Container className='text-center z-10'>
            {/* === */}
            <div className='mb-3'>
              <Link to='/'>
                <img src='/assets/logo.png' alt='Logo' />
              </Link>
            </div>
            {/* === */}
            <div className='mb-3'>
              <ul className='nav justify-content-center'>
                <li className='nav-item mx-md-3'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item mx-md-3'>
                  <Link to='/information' className='nav-link'>
                    Services
                  </Link>
                </li>
                <li className='nav-item mx-md-3'>
                  <a href='#investment' className='nav-link'>
                    Investment
                  </a>
                </li>
                <li className='nav-item mx-md-3'>
                  <Link className='nav-link'>About us</Link>
                </li>
                <li className='nav-item mx-md-3'>{link}</li>
              </ul>
            </div>
            {/* === */}
            <p>
              123-456-7890, Info@mysite.com, 500 Terry Francois St, San
              Francisco, CA 94158
            </p>
            {/* === */}
            <Row className='justify-content-center mb-3' style={{ gap: 0 }}>
              {socialMediaArr.map((data, i) => (
                <a
                  style={{ width: 30 }}
                  key={i}
                  href={data.link}
                  target='_blank'
                  rel='noreferrer'
                  className='mx-2'
                >
                  <img
                    className='d-block icon-hover'
                    height={25}
                    src={`/assets/icons/sm-icon-${i}.png`}
                    alt='..'
                  />
                </a>
              ))}
            </Row>
            {/* === */}
            <div
              className='d-flex flex-column flex-md-row justify-content-center mb-3'
              style={{ gap: 18 }}
            >
              <div>
                <Link className='btn py-2 btn-outline-primary'>Contact us</Link>
              </div>

              <div>
                <Link className='btn py-2 btn-outline-primary'>
                  Subscribe for newsletter
                </Link>
              </div>
            </div>
            {/* === */}
            <p className='small text-white text-opacity-75'>
              <div className='fw-bold'>Copyright @ bscbay.com</div>
              Disclaimer: The information provided shall not in any way
              constitute a recommendation as to whether you should invest in any
              product discussed. BSC-Bay accepts no liability for any loss
              occurring to any person acting or refraining from action as a
              result of any material provided or published. BSC-Bay was built as
              an experiment in decentralization.
            </p>
          </Container>
        </Container>
      </ScrollAnimation>
    </footer>
  );
};

export default FooterPage;
