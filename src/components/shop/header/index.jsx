import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';

const ShopHeader = (props) => {
  return (
    <header id="header" className="position-relative">
      <div className="headerHolder container pt-lg-5 pb-lg-7 py-4">
        <div className="row">
          <div className="col-6 col-sm-2">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Grøn Verden" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-7 col-lg-8 static-block">
            <div className="mainHolder pt-lg-5 pt-3 justify-content-center">
              <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
                <button
                  type="button"
                  className="navbar-toggle collapsed position-relative"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto text-uppercase d-inline-block">
                    <li className="nav-item">
                      <Link className="d-block" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="d-block" to="/shop-admin">
                        My Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="d-block" to="/shops">
                        Shops
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="d-block" to="/cart">
                        Cart
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="d-block" to="/identify">
                        Identify
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="d-block" to="/event">
                        Event
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-3 col-lg-2">
            <ul className="nav nav-tabs wishListII pt-5 justify-content-end border-bottom-0">
              <li className="nav-item">
                <Link className="nav-link icon-profile" to="/profile"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
