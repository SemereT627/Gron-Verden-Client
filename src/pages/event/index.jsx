import React from 'react';
/**
 * Components
 */
import CreateEvent from '../../components/event/create-event-form';
import EventCard from '../../components/event/event-card';
import ShopBanner from '../../components/shop/banner';
import ShopHeader from '../../components/shop/header';

const EventPage = () => {
  return (
    <>
      <ShopHeader />
      <ShopBanner />
      {/* <CreateEvent /> */}
      <EventCard />
    </>
  );
};

export default EventPage;
