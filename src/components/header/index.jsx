import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from '../../store/auth/action';

import { Dropdown, Menu, Space, Typography, Avatar } from 'antd';

import logo from '../../assets/images/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header
        id="header"
        className="pt-lg-5 pt-md-3 pt-2 position-absolute w-100"
      >
        <div className="container-fluid px-xl-17 px-lg-5 px-md-3 px-0 d-flex flex-wrap">
          <div className="col-6 col-sm-3 col-lg-2 order-sm-2 order-md-0 dis-none">
            {/* <ul className="nav nav-tabs langList pt-xl-6 pt-lg-4 pt-3 border-bottom-0">
            <li className="dropdown">
              <a
                className="dropdown-toggle text-uppercase"
                data-toggle="dropdown"
                href="#;"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ENG
              </a>
              <div className="dropdown-menu pl-4 pr-4">
                <a className="dropdown-item" href="#;">
                  English
                </a>
                <a className="dropdown-item" href="#;">
                  Amharic
                </a>
              </div>
            </li>
          </ul> */}
          </div>
          <div className="col-12 col-sm-6 col-lg-8 static-block">
            <div className="mainHolder justify-content-center">
              <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav1 position-static">
                <button
                  type="button"
                  className="navbar-toggle collapsed position-relative mt-md-2"
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
                      <Link className="d-block" to="/my-shop">
                        My shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="d-block" to="/shops">
                        Shops
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nLogo" to="/">
                        <img
                          src={logo}
                          alt="Grøn Verden"
                          className="img-fluid"
                        />
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
                      <Link className="d-block" to="/events">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="logo">
                <Link to={'/'}>
                  <img src={logo} alt="Grøn Verden" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 order-sm-3 order-md-0 dis-none">
            <ul className="nav nav-tabs wishList pt-xl-5 pt-lg-4 pt-3 mr-xl-3 mr-0 justify-content-end border-bottom-0">
              <li>
                <>
                  <div className="d-flex">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
                        </Menu>
                      }
                    >
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Space direction="horizontal" size="middle">
                          <Typography.Text>
                            Hi, {user.firstName}
                          </Typography.Text>
                          <Avatar size="default">{user.firstName[0]}</Avatar>
                        </Space>
                      </div>
                    </Dropdown>
                  </div>
                </>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
