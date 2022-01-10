import React from 'react';
import ShopContent from '../content';
import ShopFilter from '../shop-filter';

const ShopMain = () => {
  return (
    <>
      <div className="twoColumns container pt-10">
        <div className="row">
          <ShopFilter />
          <ShopContent />
        </div>
      </div>
    </>
  );
};

export default ShopMain;
