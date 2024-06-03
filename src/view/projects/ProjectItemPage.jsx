import React from 'react';
import { Container, Nav, ProgressBar, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Head } from '../../components/Head';
import AllocationSection from './sections/AllocationSection';
import ProjectDetailsSection from './sections/ProjectDetailsSection';
import ScheduleSection from './sections/ScheduleSection';

const ProjectItemPage = () => {
  const now = 50.5;

  return (
    <section className='flex-fill bg-secondary text-white py-5 position-relative'>
      <Head title='Project' />
      <section className='detail-banner pb-5'>
        <Container className='pt-lg-5 position-relative'>
          <div className='px-0 col-12 col-lg-10 col-xl-8'>
            <ul className='nav row row-cols-1 row-cols-md-2 gy-4 align-items-center'>
              <li>
                <div>
                  <div className='mb-4'>
                    <div className='mb-3'>
                      <div className='mb-2'>
                        <Link to>
                          <div class='icon-box active'>
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
                        <div className='d-flex align-items-center'>
                          <div className='mb-1 me-3'>
                            <Link to>
                              <h3 className='mb-0 fw-bold text-white'>Verve</h3>
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
                                src='/assets/icons/sm-icon-3.png'
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
                                src='/assets/icons/sm-icon-0.png'
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
                                src='/assets/icons/sm-icon-3.png'
                                alt='..'
                              />
                            </a>
                          </div>
                        </div>
                        <div>
                          <Link className='items-morex' to>
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
                    <div className='text-white-50'>
                      <small>
                        Interactive streaming, reimagined on the Velas
                        blockchain!
                      </small>
                    </div>
                    <div className='mt-4'>
                      <button
                        type='button'
                        className='btn btn-outline-primary fw-500'
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className='bg-dark p-4 rounded-lg-1'>
                    <h5 className='mb-3'>Opens in TBA</h5>
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
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className='mt-4'>
        <Container className='position-relative'>
          <div>
            <Tab.Container id='left-tabs-example' defaultActiveKey='details'>
              <div>
                <div className='border-bottom'>
                  <Nav
                    variant='...'
                    className='flex-nowrap align-items-end overflow-auto'
                  >
                    <Nav.Item>
                      <Nav.Link
                        className='tab-link text-capitalize'
                        eventKey='details'
                      >
                        Project details
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className='tab-link text-capitalize'
                        eventKey='Schedule'
                      >
                        Schedule
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className='tab-link text-capitalize'
                        eventKey='Allocation'
                      >
                        Your Allocation
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className='mt-4'>
                  <Tab.Content>
                    <Tab.Pane eventKey='details'>
                      <ProjectDetailsSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey='Schedule'>
                      <ScheduleSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey='Allocation'>
                      <AllocationSection />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default ProjectItemPage;
