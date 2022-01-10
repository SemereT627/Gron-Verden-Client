import React, { useState } from 'react';

import { Button, Row, Col } from 'antd';
/**
 * Components
 */
import CreateEvent from '../../components/event/create-event-form';
import EventCard from '../../components/event/event-card';
import ShopBanner from '../../components/shop/banner';
import ShopHeader from '../../components/shop/header';

const EventPage = () => {
  const [createVisible, setCreateVisible] = useState(false);

  const showModal = () => {
    setCreateVisible(true);
  };

  const handleCancel = () => {
    setCreateVisible(false);
  };

  return (
    <>
      <ShopHeader />
      <ShopBanner bannerTitle={'Events'} subTitle={'Events'} userName={'All'} />
      <Row>
        <Col>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </Col>
      </Row>

      <CreateEvent visible={createVisible} onCancel={handleCancel} />
      <EventCard />
    </>
  );
};

export default EventPage;
