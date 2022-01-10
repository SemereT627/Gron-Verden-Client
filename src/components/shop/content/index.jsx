import React from 'react';

const ShopContent = () => {
  return (
    <>
      <div className="col-12 col-lg-9 order-lg-3">
        <article id="content">
          <header className="show-head d-flex flex-wrap justify-content-between mb-7">
            <div className="sortGroup">
              <div className="d-flex flex-nowrap align-items-center">
                <h1 className="mr-2">List of Plants</h1>
              </div>
            </div>
          </header>
          <div className="row">
            {/* {shopPlants &&
              shopPlants.map((plant) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-4 featureCol mb-7">
                    <div className="border">
                      <div className="imgHolder position-relative w-100 overflow-hidden">
                        <img
                          src={`http://localhost:8000/${plant.plantImage}`}
                          alt="image description"
                          className="img-fluid w-100"
                        />
                        <ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
                          <li className="mr-2 overflow-hidden">
                            <a
                              href="#;"
                              className="icon-heart d-block"
                            ></a>
                          </li>
                          <li className="mr-2 overflow-hidden">
                            <a
                              href="#;"
                              className="icon-cart d-block"
                            ></a>
                          </li>
                          <li className="mr-2 overflow-hidden">
                            <Link
                              to={`/product/${plant._id}`}
                              className="icon-eye d-block"
                            ></Link>
                          </li>
                          <li className="overflow-hidden">
                            <a
                              href="#;"
                              className="icon-arrow d-block"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center py-5 px-4">
                        <span className="title fwEbold d-block mb-1">
                          <Link to={`/product/${plant._id}`}>
                            {plant.plantName}
                          </Link>
                        </span>
                        <span className="price d-block fwEbold">
                          Plant price: {plant.plantPrice}br
                        </span>
                        <span className="hotOffer fwEbold text-white position-absolute d-block">
                          {plant.plantLength}cm
                        </span>
                        <span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">
                          Size
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            <div className="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
              <ul className="list-unstyled pagination d-flex justify-content-center align-items-end">
                <li>
                  <a href="#;">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#;">1</a>
                </li>
                <li>
                  <a href="#;">2</a>
                </li>
                <li>...</li>
                <li>
                  <a href="#;">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ShopContent;
