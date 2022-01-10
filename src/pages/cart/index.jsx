import React from 'react';
import ShopBanner from '../../components/shop/banner';

import ShopHeader from '../../components/shop/header';
import Footer from '../../components/footer';
import CardMain from '../../components/cart/main';

const CartPage = () => {
  return (
    <>
      <ShopHeader />
      <ShopBanner bannerTitle={'Cart'} subTitle={'Cart'} userName={'Items'} />
      <CardMain />
      
      <Footer />
    </>
  );
};

export default CartPage;
