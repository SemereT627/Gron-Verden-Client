import React, { useState, useEffect } from 'react';

import { Button, Row, Col, Spin } from 'antd';
/**
 * Components
 */
import CreateEvent from '../../components/event/create-event-form';
import EventCard from '../../components/event/event-card';
import ShopBanner from '../../components/shop/banner';
import ShopHeader from '../../components/shop/header';
import Footer from '../../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearfetchEventsSuccess,
  fetchEventsAsync,
} from '../../store/event/action';
import {
  applyEventAsync,
  clearapplyEventSuccess,
} from '../../store/apply-event/action';
import { useHistory } from 'react-router-dom';

const EventPage = () => {
  const dispatch = useDispatch();
  const { events, fetchEventsLoading, fetchEventsSuccess, fetchEventsError } =
    useSelector((state) => state.event);

  const [createVisible, setCreateVisible] = useState(false);

  const showModal = () => {
    setCreateVisible(true);
  };

  const handleCancel = () => {
    setCreateVisible(false);
  };

  const handleCreateEventSubmit = () => {
    setCreateVisible(false);
    dispatch(fetchEventsAsync());
  };

  useEffect(() => {
    dispatch(fetchEventsAsync());
  }, []);

  useEffect(() => {
    if (fetchEventsError) {
      dispatch(clearfetchEventsSuccess());
    }
  }, [fetchEventsError]);

  return (
    <>
      <ShopHeader />
      <ShopBanner bannerTitle={'Events'} subTitle={'Events'} userName={'All'} />
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
              Create Event
            </Button>
          </Col>
        </Row>
      </div>
      <CreateEvent
        visible={createVisible}
        onCancel={handleCancel}
        onSubmit={handleCreateEventSubmit}
      />

      {fetchEventsLoading && (
        <div
          style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin tip="Loading Events..." />
        </div>
      )}

      {events.map((event, index) => {
        return (
          <EventCard
            eventName={event.eventName}
            eventDescription={event.eventDescription}
            eventStartDate={event.eventStartDate}
            eventEndDate={event.eventEndDate}
            eventGoal={event.eventGoal}
            eventParticipants={
              event.eventParticipants === [] ? 0 : event.eventParticipants
            }
            eventTotalParticipants={event.eventTotalParticipants}
            eventLogo={event.eventLogo}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default EventPage;
