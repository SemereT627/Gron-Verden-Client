import React from 'react';
import HomeBanner from '../../components/banner';
import HomeCarousel from '../../components/carousel';

import Header from '../../components/header';
import PlantCategory from '../../components/plant-category';
import WhyYouChooseUs from '../../components/why-you-choose-us';

/**
 * components
 */

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeCarousel />
      <WhyYouChooseUs />
      <PlantCategory />
      <HomeBanner />
    </>
  );
};

export default HomePage;
