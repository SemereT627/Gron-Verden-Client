import React, { useState } from 'react';
import ShopHeader from '../../components/shop/header';
import ShopBanner from '../../components/shop/banner';
import CreateShop from '../../components/shop/create-shop';
import Footer from '../../components/footer';

import { Button, Row, Col } from 'antd';
import MyShop from '../../components/my-shop/main';
import { useSelector } from 'react-redux';

const MyShopPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };
  const handleCanel = () => {
    setIsVisible(false);
  };

  return (
    <>
      <ShopHeader />
      <ShopBanner
        bannerTitle={'My Shop'}
        subTitle={'Shops'}
        userName={'My Shop'}
      />

      {user.role === 'User' ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '15px',
            marginBottom: '15px',
          }}
        >
          <Row>
            <Col>
              <Button type="primary" onClick={showModal}>
                Create Shop
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <MyShop />
      )}

      <CreateShop
        key={'createShop'}
        visible={isVisible}
        onCancel={handleCanel}
      />

      <Footer />
    </>
  );
};

export default MyShopPage;
