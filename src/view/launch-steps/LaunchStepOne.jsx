import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LaunchStepOne = ({ show, onHide, onClick }) => {
  return (
    <Modal centered show={show} onHide={onHide} contentClassName='border-0'>
      <section className='flex-fill bg-color-5 text-white d-flex align-items-center justify-content-center position-relative'>
        <Link
          onClick={onClick}
          className='bg-secondary rounded-lg-2 px-md-5 px-1 py-3 w-100 text-center'
        >
          <div className='mb-3 d-flex align-items-baseline justify-content-center'>
            <img src='/assets/e-icon-0.png' alt='...' />
            <img className='ms-1' src='./assets/e-icon-1.png' alt='...' />
          </div>
          <p className='mb-0 fw-light text-white'>
            You are not connected or not using Binance Smart Chain network
            <br />
            To use the app, make sure: <br />
            You are using the Binance Smart Chain network You need to connect
            wallet to continue
            <br />
            Please switch to BSC Network if you use:
            <br />
            <span className='text-primary'>Metamask</span>
            <br />
            <span className='text-primary fw-bold'>TrustWallet</span>
          </p>
        </Link>
      </section>
    </Modal>
  );
};

export default LaunchStepOne;
