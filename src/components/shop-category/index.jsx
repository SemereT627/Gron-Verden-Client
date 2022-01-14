import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Spin } from 'antd';

import {
  clearfetchShopsSuccess,
  fetchShopsAsync,
} from '../../store/shop/action';

const ShopCategory = () => {
  const dispatch = useDispatch();
  const { shops, fetchShopsLoading, fetchShopsSuccess, fetchShopsError } =
    useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(fetchShopsAsync());
  }, []);

  useEffect(() => {
    if (fetchShopsSuccess) {
      dispatch(clearfetchShopsSuccess());
    }
  }, [fetchShopsSuccess]);

  useEffect(() => {
    if (fetchShopsError) {
      dispatch(clearfetchShopsSuccess());
    }
  }, [fetchShopsError]);

  if (fetchShopsLoading || !shops) {
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
  }
  return (
    <>
      <section className="popular-product padding-section">
        <div className="container">
          <div className="row">
            <div className="box-title">
              <h5 className="mx-auto box-des des-popular-product">
                <span className="des-line">The powerhouses</span>
              </h5>
              <h2 className="des-title">Popular shops</h2>
            </div>
          </div>
          <div className="row">
            {shops &&
              shops.map((shop) => {
                return (
                  <div
                    key={shop._id}
                    className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12"
                  >
                    <div className="box-item">
                      <div className="box-item-image">
                        <Link to={`/shops/${shop._id}`}>
                          <img
                            src={`http://localhost:8000/img/shop/${shop.shopImage}`}
                            alt="Deal of the week"
                          />
                        </Link>
                      </div>
                      <div className="box-item-info">
                        <h3 className="bg-secondary">
                          <Link
                            to={`/shops/${shop._id}`}
                            className="item-name font-weight-bold"
                            style={{ color: '#ffffff' }}
                          >
                            {shop.shopName}
                          </Link>
                        </h3>
                        <div className="item-price-rate"></div>
                      </div>
                      <div className="offer">
                        <div className="percent">
                          {shop.shopProducts.length > 1
                            ? `${shop.shopProducts.length} items`
                            : `${shop.shopProducts.length} item`}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
