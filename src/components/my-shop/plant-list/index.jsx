import React, { useState } from 'react';
import CreatePlantInMyShop from './create-plant';

import { Button } from 'antd';
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
      <Button type="primary" onClick={showModal}>
        Create Plant
      </Button>

      <CreatePlantInMyShop visible={isVisible} onCancel={handleCancel} />
      <ShopPlantCategory />
    </>
  );
};

export default PlantList;
