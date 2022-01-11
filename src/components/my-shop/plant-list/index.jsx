import React, { useState } from 'react';
import CreatePlantInMyShop from './create-plant';

import { Button, Row, Col } from 'antd';
import ShopPlantCategory from '../category';

const PlantList = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
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
              Create Plant
            </Button>
          </Col>
        </Row>
      </div>

      <CreatePlantInMyShop visible={isVisible} onCancel={handleCancel} />
      <ShopPlantCategory />
    </>
  );
};

export default PlantList;
