import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ now }) => {
  return (
    <div className='box-information project-card bg-gradient p-4'>
      <div>
        <div className='mb-4'>
          <div className='d-flex mb-3'>
            <div className='me-2'>
              <Link to='/projects/item'>
                <div class='icon-box'>
                  <span>
                    <img
                      className='d-block h-100 w-100'
                      src='https://i.ibb.co/3B3r3Kg/VERVE.jpg'
                      alt='...'
                    />
                  </span>
                </div>
              </Link>
            </div>
            <div className='title-box'>
              <div className='mb-1'>
                <Link to='/projects/item'>
                  <h5 className='mb-0 fw-bold text-white'>Verve</h5>
                </Link>
              </div>
              <div className='item-social d-flex gap-2 mb-1'>
                <a
                  className='d-block'
                  href='https://vervetv.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    class='d-block icon-hover'
                    height='20'
                    src='./assets/icons/sm-icon-3.png'
                    alt='..'
                  />
                </a>
                <a
                  className='d-block'
                  href='https://twitter.com/Verve_TV'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    class='d-block icon-hover'
                    height='20'
                    src='./assets/icons/sm-icon-0.png'
                    alt='..'
                  />
                </a>
                <a
                  className='d-block'
                  href='https://t.me/VerveOfficial'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    class='d-block icon-hover'
                    height='20'
                    src='./assets/icons/sm-icon-3.png'
                    alt='..'
                  />
                </a>
              </div>
              <div>
                <Link className='items-morex' to='/projects/item'>
                  <div className='mb-1'>
                    <span className='badge bg-primary bg-opacity-50 text-primary rounded-pill'>
                      <span className='badge p-1 bg-primary d-inline-block rounded-circle' />{' '}
                      Opens in TBA
                    </span>
                  </div>
                  <div>
                    <span className='badge bg-primary bg-opacity-50 text-primary rounded-pill'>
                      BUSD
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <small>
              Interactive streaming, reimagined on the Velas blockchain!
            </small>
          </div>
        </div>
        <div className='mt-auto'>
          <div className='nav justify-content-between'>
            <div className='pp-card-col'>
              <small className='text-white-3'>Swap rate</small>
              <br />
              <b class='nowrap'>1 BUSD = 200 WWY</b>
            </div>
            <div className='pp-card-col text-center'>
              <small className='text-white-3'>Cap</small>
              <br />
              <b>300000</b>
            </div>
            <div className='pp-card-col text-end text-capitalize'>
              <small className='text-white-3'>Access</small>
              <br />
              <b>Private</b>
            </div>
          </div>
          <div className='mt-3'>
            <div className='small text-white-50'>Progress</div>
            <div className='my-2 progress-radius'>
              <ProgressBar variant='color-3' now={now} />
            </div>
            <div className='nav justify-content-between gap-2 small'>
              <span>{now}%</span>
              <span>0.0000/0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
