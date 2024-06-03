import React from 'react';
import { Container } from 'react-bootstrap';
import { Head } from '../../components/Head';

import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
  const cardsList = [{}, {}];

  const now = 1.5;

  return (
    <section className='flex-fill bg-color-2 text-white py-5 position-relative'>
      <Head title='Projects' />
      <Container fluid='xxl'>
        <img
          style={{ top: '30%', width: '20%' }}
          className='position-absolute start-0'
          src='./assets/bg-5.png'
          alt='..'
        />
        <img
          style={{ top: '65%', width: '20%' }}
          className='position-absolute start-0'
          src='./assets/bg-5.png'
          alt='..'
        />

        <Container className='pt-lg-5 position-relative'>
          <div>
            {/* Headings */}
            <div className='text-center mb-5'>
              <div className='heading-primary text-uppercase'>
                PROJECTS <span className='text-primary'>OPEN</span> NOW
              </div>
              <div className='h5 my-5 text-white-50'>
                No projects currently open
              </div>
              <div className='heading-primary text-uppercase'>
                PROJECTS <span className='text-primary'>COMING</span> Soon
              </div>
            </div>
            {/* /Headings */}
            <ul className='nav row row-cols-1 row-cols-md-2 gy-3'>
              {cardsList.map((item) => (
                <li>
                  <ProjectCard now={now} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default ProjectsPage;
