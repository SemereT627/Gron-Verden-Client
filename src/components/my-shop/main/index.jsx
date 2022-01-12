import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopsAsync } from '../../../store/shop/action';
import PlantList from '../plant-list';

import { Spin } from 'antd';

const MyShop = () => {
  const dispatch = useDispatch();
  const [shop, setShop] = useState([
    {
      shopName: 'Mock',
      shopDescription: 'Shop',
    },
  ]);

  const { shops, fetchShopsLoading, fetchShopsSuccess, fetchShopsError } =
    useSelector((state) => state.shop);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchShopsAsync());
  }, []);

  useEffect(() => {
    if (fetchShopsSuccess) {
      const shopSingle = shops.filter((shop) => {
        return shop.shopOwner === user._id;
      });
      setShop(shopSingle);
    }
  }, [fetchShopsSuccess]);

  if (!fetchShopsSuccess) {
    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spin tip="Loading Shops..." />
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <header className="col-12 mainHeader mb-10 text-center">
              <h1 className="headingIV playfair fwEblod mt-2">Store Name</h1>
              <h1 className="headingIV playfair fwEblod mt-2">
                {shop[0].shopName}
              </h1>
              <h5 className="playfair fwEblod">Store Description</h5>
              <p>{shop[0].shopDescription}</p>
            </header>
          </div>
          <PlantList />
        </div>
      </>
    );
  }
};

export default MyShop;
