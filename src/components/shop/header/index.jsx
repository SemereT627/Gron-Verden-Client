import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Dropdown, Menu, Space, Typography, Avatar } from 'antd';

import logo from '../../../assets/images/logo.png';

import { logOut } from '../../../store/auth/action';

const ShopHeader = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logOut());
  };

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
          <div className="col-6 col-sm-7 col-lg-7 static-block">
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
                      <Link className="d-block" to="/my-shop">
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
                      <Link className="d-block" to="/events">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <ul className="nav nav-tabs wishListII pt-3 justify-content-end border-bottom-0">
              <li className="nav-item">
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
      </div>
    </header>
  );
};

export default ShopHeader;
