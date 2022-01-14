import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearfetchShopsSuccess,
  fetchShopsAsync,
} from '../../../store/shop/action';
import PlantList from '../plant-list';

import { Spin } from 'antd';

const MyShop = () => {
  const dispatch = useDispatch();
  const [shop, setShop] = useState([
    {
      shopName: 'Mock',
      shopDescription: 'Shop',
      shopImage: '',
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
      dispatch(clearfetchShopsSuccess());
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
            <div className="col-6">
              <header className="col-12 mainHeader text-center">
                <div className="row">
                  <div className="col-6">
                    <h2 className="mt-2">Store Name</h2>
                  </div>
                  <div className="col-6">
                    <h2 className="mt-2">{shop[0].shopName}</h2>
                  </div>
                  <div className="col-6">
                    <h2 className="mt-2">
                      <h4 className="playfair fwEblod">Store Description</h4>
                    </h2>
                  </div>
                  <div className="col-6">
                    <h4 className="mt-2">{shop[0].shopDescription}</h4>
                  </div>
                </div>
              </header>
            </div>
            <div className="col-6">
              <img
                width={'200px'}
                src={`http://localhost:8000/img/shop/${shop[0].shopImage[0]}`}
                alt="shopLogo"
              />
            </div>
          </div>
          <PlantList />
        </div>
      </>
    );
  }
};

export default MyShop;
