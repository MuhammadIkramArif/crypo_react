import React from 'react';
import { Head } from '../../components/Head';
import HomeSectionOne from './sections/HomeSectionOne';
import HomeSectionTwo from './sections/HomeSectionTwo';
import HomeSectionThree from './sections/HomeSectionThree';
import HomeSectionFour from './sections/HomeSectionFour';
import HomeSectionFive from './sections/HomeSectionFive';
import HomeSectionRoadmap from './sections/HomeSectionRoadmap';
import HomeSectionSix from './sections/HomeSectionSix';
import TieredSystemSection from './sections/TieredSystemSection';

const HomePage = () => {
  return (
    <section className='flex-fill'>
      <Head title='Home' />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <TieredSystemSection />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionRoadmap />
      <HomeSectionSix />
    </section>
  );
};

export default HomePage;
