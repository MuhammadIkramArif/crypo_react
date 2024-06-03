import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const LaunchStepTwo = ({ show, onHide, onClick }) => {
  return (
    <Modal
      size='xl'
      centered
      show={show}
      onHide={onHide}
      contentClassName='border-0'
    >
      <section className='flex-fill bg-color-5 text-white-2 d-flex align-items-center justify-content-center position-relative'>
        <div className='bg-secondary rounded-lg-2 px-md-5 px-3 pt-3 pt-md-5 pb-4 w-100'>
          <div className='mb-3'>
            <div className='title-small text-white fw-bold'>Disclaimer</div>
          </div>
          <p className='mb-4'>
            Trading cryptocurrencies carries a{' '}
            <span className='text-primary'>high level of risk,</span> and may
            not be suitable for all investors.{' '}
            <span className='text-primary'>
              Before deciding to trade cryptocurrency
            </span>{' '}
            you should carefully consider your investment objectives, level of
            experience, and risk appetite. The possibility exists that you could
            sustain a loss of some or all of your initial investment and
            therefore you should not invest money that you cannot afford to
            lose. ICO's, 1E0's, STO's and any other form of offering will not
            guarantee a return on your investment.
          </p>
          <p className='mb-4 text-primary'>
            {' '}
            You should be aware of all the risks associated with cryptocurrency
            trading, and seek advice from an independent financial advisor
          </p>
          <p className='mb-4'>
            Any opinions, news, research, analyses, prices, or other information
            contained on this website is provided as general market commentary,
            and does not constitute investment advice. The Hodltoken.net and its
            affiliates will not accept liability for any loss or damage,
            including without limitation to, any loss of profit, which may arise
            directly or indirectly from use of or reliance on such information.
            All opinions expressed on this site are owned by the respective
            writer and should never be considered as advice in any form.
          </p>
          <p className='mb-4'>
            :01 1 C I The Hodltoken.net and its affiliates makes no
            representation or warranties as to the accuracy and or timelines of
            the information contained herein. A qualified professional should be
            consulted before making any financial decisions.
          </p>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckChecked'
            />
            <label
              class='form-check-label cursor-pointer text-primary'
              for='flexCheckChecked'
            >
              I understand and accept that I will trade/invest HODL at my own
              risks ID C
            </label>
          </div>
          <div className='mt-4 mb-2 px-0 col-md-6 col-lg-3 col-xl-3 mx-auto'>
            <Link onClick={onClick} className='btn btn-color py-2 w-100'>
              <span className='text-uppercase fw-600 py-1 title-small-1'>
                Confirm
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default LaunchStepTwo;
