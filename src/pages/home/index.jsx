import React from 'react';
import HomeBanner from '../../components/banner';
import HomeCarousel from '../../components/carousel';
import Footer from '../../components/footer';

import Header from '../../components/header';
import PlantCategory from '../../components/plant-category';
import ShopCategory from '../../components/shop-category';
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
      <ShopCategory />
      <Footer />
    </>
  );
};

export default HomePage;
