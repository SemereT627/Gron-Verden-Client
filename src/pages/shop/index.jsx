import React from 'react';
import ShopBanner from '../../components/shop/banner';
import ShopHeader from '../../components/shop/header';
import ShopMain from '../../components/shop/main';
import ShopStat from '../../components/shop/stat';

import Footer from '../../components/footer';

const ShopPage = () => {
  return (
    <>
      <ShopHeader />
      <ShopBanner bannerTitle={'Shops'} subTitle={'Shops'} userName={'All'} />
      <ShopStat />
      <ShopMain />
      <Footer />
    </>
  );
};

export default ShopPage;
