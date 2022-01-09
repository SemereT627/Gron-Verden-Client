import React from 'react';
import IdentifyPlantForm from '../../components/identify-plant/form';
import ShopBanner from '../../components/shop/banner';
import ShopHeader from '../../components/shop/header';

const IdentifyPlant = () => {
  return (
    <>
      <ShopHeader />
      <ShopBanner />
      <IdentifyPlantForm />
    </>
  );
};

export default IdentifyPlant;
