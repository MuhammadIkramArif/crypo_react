import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeSectionSix = () => {
  return (
    <section className='py-5 bg-b-1 bg-color-4 text-white'>
      <Container>
        <ScrollAnimation
          animateIn='zoomInDown'
          animateOut='zoomOutDown'
          scrollableParentSelector='#scrolly-main'
        >
          <div className='text-center'>
            <div className='heading-primary-2 fw-normal'>
              <span className='text-white-2'>Are You Ready to</span> <br />{' '}
              <b>Accelerate Your Earning?</b>
            </div>
            <p className='mt-3 mb-4 px-0 col-md-10 col-lg-7 mx-auto text-white text-opacity-75'>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <div className='px-0 col-10 col-md-4 col-lg-3 col-xxl-2 mx-auto'>
              <Link className='btn-1 button-1 btn-color w-100'>
                <span className='ms-2 text-uppercase fw-bold text-small'>
                  GET START NOW
                </span>
                <img
                  className='ms-2'
                  height={13}
                  src='./assets/arrow-2.png'
                  alt='arrow'
                />
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default HomeSectionSix;
