import React, { useState } from 'react';
import ShopHeader from '../../components/shop/header';
import ShopBanner from '../../components/shop/banner';
import CreateShop from '../../components/shop/create-shop';
import Footer from '../../components/footer';

import { Button } from 'antd';
import MyShop from '../../components/my-shop/main';

const MyShopPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };
  const handleCanel = () => {
    setIsVisible(false);
  };

  return (
    <>
      <ShopHeader />
      <ShopBanner />

      <Button type="primary" onClick={showModal}>
        Create Shop
      </Button>

      {/* Need to be in condition */}
      <CreateShop visible={isVisible} onCancel={handleCanel} />
      {/* Need to be in condition */}
      <MyShop />

      
      <Footer />
    </>
  );
};

export default MyShopPage;
