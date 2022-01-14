import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearfetchPlantsSuccess,
  fetchPlantsAsync,
} from '../../../store/plant/action';
import {
  clearfetchShopsSuccess,
  fetchShopsAsync,
} from '../../../store/shop/action';

import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const ShopPlantCategory = () => {
  const dispatch = useDispatch();

  const { plants, fetchPlantsLoading, fetchPlantsSuccess, fetchPlantsError } =
    useSelector((state) => state.plant);

  const { shops, fetchShopsLoading, fetchShopsSuccess, fetchShopsError } =
    useSelector((state) => state.shop);

  const { user } = useSelector((state) => state.auth);

  const [userShop, setUserShop] = useState([]);
  const [userShopPlants, setUserShopPlants] = useState([]);

  useEffect(() => {
    dispatch(fetchShopsAsync());
    const theUserShop = shops.filter((shop) => {
      return shop.shopOwner === user._id;
    });
    dispatch(fetchPlantsAsync());
    setUserShop(theUserShop);
  }, []);

  useEffect(() => {
    let result = [];
    if (userShop[0] !== undefined) {
      const plantsInTheShop = plants.filter((plant) => {
        userShop[0].shopProducts.filter((plantId) => {
          if (plantId === plant._id) {
            result.push(plant);
          }
        });
      });
      setUserShopPlants(result);
    }
    if (fetchPlantsSuccess) {
      dispatch(clearfetchPlantsSuccess());
    }
  }, [fetchPlantsSuccess]);

  // useEffect(() => {
  //   if (fetchShopsSuccess) {
  //     dispatch(clearfetchShopsSuccess());
  //   }
  // }, [fetchShopsSuccess]);

  // useEffect(() => {
  //   if (fetchPlantsError) {
  //     dispatch(clearfetchPlantsSuccess());
  //   }
  // }, [fetchPlantsError]);

  // useEffect(() => {
  //   if (fetchShopsError) {
  //     dispatch(clearfetchShopsSuccess());
  //   }
  // }, [fetchShopsError]);

  if (!fetchPlantsSuccess) {
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
        <Spin tip="Loading Plants..." />
      </div>
    );
  } else {
    return (
      <>
        <section className="popular-product padding-section">
          <div className="container">
            <div className="row">
              <div className="box-title">
                <h5 className="mx-auto box-des des-popular-product">
                  <span className="des-line pb-4">
                    Plant list ({userShopPlants.length})
                  </span>
                </h5>
              </div>
            </div>
            <div className="row">
              {userShopPlants &&
                userShopPlants.map((plant) => {
                  return (
                    <div
                      key={plant._id}
                      className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12"
                    >
                      <div className="box-item">
                        <div className="box-item-image">
                          <Link to={`/plants/${plant._id}`}>
                            <img
                              width={'200px'}
                              height={'400px'}
                              src={`http://localhost:8000/img/plant/${plant.plantImage}`}
                              alt="Deal of the week"
                            />
                          </Link>
                        </div>
                        <div className="box-item-info">
                          <h3 className="">
                            <Link
                              to={`/plants/${plant._id}`}
                              className="item-name font-weight-bold playfair"
                              style={{ color: '#000000' }}
                            >
                              {plant.plantName}
                            </Link>
                          </h3>
                          <div className="item-price-rate">
                            <div className="item-price">
                              <span className="sale text-secondary">
                                Price{' '}
                              </span>
                              <span className="sale text-primary">
                                {plant.plantPrice}br
                              </span>
                            </div>
                            <div className="item-rating">
                              <span className="rating-badge">
                                <span className="badge-starrating">
                                  <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                                  <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                                  <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                                  <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                                  <i className="star-icon star-icon-color2 lnr lnr-star"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="offer">
                          <div className="percent">{`${plant.plantLength}cm`}</div>
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
  }
};

export default ShopPlantCategory;
