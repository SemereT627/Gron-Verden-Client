import React from 'react';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
  return (
    <>
      <section
        className="introBannerHolder d-flex w-100 bgCover"
        style={{
          backgroundImage:
            'url(http://htmlbeans.com/html/botanical/images/b-bg7.jpg)',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
              <h1 className="headingIV fwEbold playfair mb-4">
                {/* {bannerTitle} */}
                AA
              </h1>
              <ul className="list-unstyled breadCrumbs d-flex justify-content-center">
                <li className="mr-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mr-2">/</li>
                <li className="mr-2">
                  <a href="shop.html">Shop</a>
                </li>
                <li className="mr-2">/</li>
                <li className="active">
                  {/* {userName ? userName + "'s Shop" : ''} */}
                  AA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopBanner;
