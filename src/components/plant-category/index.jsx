import React from 'react';

const PlantCategory = () => {
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
                          {/* ({plantTypes.tableTreePlant} Items) */}0
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
                          {/* ({plantTypes.indoorPlant} Items) */}0
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
                          {/* ({plantTypes.officePlant} Items) */}0
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
                          {/* ({plantTypes.housePlant} Items) */}0
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
                      {/* ({plantTypes.cactusPlant} Items) */}0
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
