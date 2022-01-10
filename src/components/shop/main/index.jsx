import React from 'react';
import ShopContent from '../content';
import ShopFilter from '../shop-filter';

const ShopMain = () => {
  return (
    <>
      <div class="twoColumns container pt-10">
        <div class="row">
          <ShopFilter />
          <ShopContent />
        </div>
      </div>
    </>
  );
};

export default ShopMain;
