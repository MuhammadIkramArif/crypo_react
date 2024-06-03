import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const ButtonPrimary = ({ className = 'btn-primary' }) => {
  return (
    <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
      <a
        href='mailto:shabablaltaf1994@gmail.com'
        className={`btn py-2 rounded-lg-1 ${className}`}
      >
        <span className='me-1 text-white'>Get in Touch</span>
        <img
          height='20px'
          className='ms-2'
          src='./images/send.svg'
          alt='button'
        />
      </a>
    </ScrollAnimation>
  );
};

export default ButtonPrimary;
