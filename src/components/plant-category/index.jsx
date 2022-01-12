import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Spin } from 'antd';

import {
  clearfetchPlantsSuccess,
  fetchPlantsAsync,
} from '../../store/plant/action';

const PlantCategory = () => {
  const dispatch = useDispatch();
  const plantTypeName = [
    'indoorPlant',
    'housePlant',
    'cactusPlant',
    'tableTreePlant',
    'officePlant',
  ];
  const [plantTypes, setPlantTypes] = useState({
    indoorPlant: 0,
    tableTreePlant: 0,
    officePlant: 0,
    housePlant: 0,
    cactusPlant: 0,
  });
  const { plants, fetchPlantsLoading, fetchPlantsSuccess, fetchPlantsError } =
    useSelector((state) => state.plant);

  useEffect(() => {
    dispatch(fetchPlantsAsync());
  }, []);

  useEffect(() => {
    const result = {
      indoorPlant: 0,
      tableTreePlant: 0,
      officePlant: 0,
      housePlant: 0,
      cactusPlant: 0,
    };
    plants.forEach((plant) => {
      plantTypeName.forEach((plantName) => {
        if (plant.plantType === plantName) {
          result[plantName] += 1;
        }
      });
    });
    setPlantTypes(result);
    console.log(plantTypes);
  }, [fetchPlantsSuccess]);

  useEffect(() => {
    if (fetchPlantsError) {
      dispatch(clearfetchPlantsSuccess());
    }
  }, [fetchPlantsError]);

  if (fetchPlantsLoading || !plants) {
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
  }

  return (
    <>
      <section className="categories padding-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12 cate-left">
              <div className="row clear">
                <div className="col-md-8 gutter">
                  <a href="">
                    <div className="categories-item">
                      <img
                        src="http://landing.engotheme.com/html/hamadryad/demo/images/categories/categories-1.jpg"
                        alt=""
                      />
                      <div className="categories-info">
                        <h4>Table Tree Plant</h4>
                        <p className="categories-info-count">
                          ({plantTypes.tableTreePlant} Items)
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gutter">
                  <a href="">
                    <div className="categories-item">
                      <img
                        src="http://landing.engotheme.com/html/hamadryad/demo/images/categories/categories-2.jpg"
                        alt=""
                      />
                      <div className="categories-info">
                        <h4>Indoor Plants</h4>
                        <p className="categories-info-count">
                          ({plantTypes.indoorPlant} Items)
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row clear">
                <div className="col-md-4 gutter">
                  <a href="">
                    <div className="categories-item">
                      <img
                        src="http://landing.engotheme.com/html/hamadryad/demo/images/categories/categories-4.jpg"
                        alt=""
                      />
                      <div className="categories-info">
                        <h4>Office Plants</h4>
                        <p className="categories-info-count">
                          ({plantTypes.officePlant} Items)
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-8 gutter">
                  <a href="">
                    <div className="categories-item">
                      <img
                        src="http://landing.engotheme.com/html/hamadryad/demo/images/categories/categories-5.jpg"
                        alt=""
                      />
                      <div className="categories-info">
                        <h4>House Plants</h4>
                        <p className="categories-info-count">
                          ({plantTypes.housePlant} Items)
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 gutter d-none-19">
              <a href="">
                <div className="categories-item">
                  <img
                    src="http://landing.engotheme.com/html/hamadryad/demo/images/categories/categories-3.jpg"
                    alt=""
                  />
                  <div className="categories-info">
                    <h4>Cactus Plant</h4>
                    <p className="categories-info-count">
                      ({plantTypes.cactusPlant} Items)
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlantCategory;
