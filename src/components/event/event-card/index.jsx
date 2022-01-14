import React, { useState, useEffect } from 'react';

import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  message,
  DatePicker,
  Progress,
  notification,
} from 'antd';

import FormItem from 'antd/lib/form/FormItem';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearapplyEventSuccess,
  applyEventAsync,
} from '../../../store/apply-event/action';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EventCard = ({
  eventId,
  eventName,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventGoal,
  eventParticipants,
  eventTotalParticipants,
  eventLogo,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { applyEventLoading, applyEventSuccess, applyEventError } = useSelector(
    (state) => state.applyEvent
  );

  const [applyEventLoadin, setApplyEventLoadin] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    const { eventId } = values;
    dispatch(applyEventAsync(eventId));
  };

  useEffect(() => {
    if (applyEventSuccess) {
      message.success('You have successfully registered for an event');
      dispatch(clearapplyEventSuccess());
      history.push('/events');
    }
  }, [applyEventSuccess]);

  useEffect(() => {
    if (applyEventError) {
      dispatch(clearapplyEventSuccess());
    }
  }, [applyEventError]);

  return (
    <>
      {applyEventError && applyEventError.response
        ? notification.error({
            message: 'Error',
            placement: 'topRight',
            description: applyEventError.response.data.msg,
          })
        : null}
      <section className="abtSecHolder container pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5">
        <div className="row">
          <div className="col-12 col-lg-6 pt-xl-12 pt-lg-8">
            <h2 className="playfair fwEbold position-relative mb-7 pb-5">
              <strong className="d-block">{eventName}</strong>
            </h2>
            <p className="pr-xl-16 pr-lg-10 mb-lg-0 mb-6">{eventDescription}</p>
            <div className="row">
              <div className="col-sm-6">
                <p className="pt-5">
                  <span className="font-weight-bold">Start Date</span> :
                  {eventStartDate}
                </p>
              </div>
              <div className="col-sm-6">
                <p className="pt-5">
                  <span className="font-weight-bold">End Date</span> :
                  {eventEndDate}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <span className="font-weight-bold">Event goal</span> :{' '}
                  {eventGoal}
                </p>
              </div>
              <div className="col-sm-6">
                <p>
                  <span className="font-weight-bold">Total Participants</span> :{' '}
                  {eventTotalParticipants}
                </p>
                <p>
                  <span className="font-weight-bold">Active Participants</span>{' '}
                  : {eventParticipants.length}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Progress
                  percent={(
                    (eventParticipants.length / eventTotalParticipants) *
                    100
                  ).toFixed(2)}
                />
              </div>
              <div className="col-sm-6">
                <Form
                  onFinish={handleSubmit}
                  {...layout}
                  name="control-hooks"
                  initialValues={{
                    eventId,
                  }}
                >
                  <Form.Item name={'eventId'}>
                    <Input value={eventId} hidden />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={applyEventLoading}
                      disabled={applyEventLoading}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}/event/${eventLogo}`}
              alt="image description"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventCard;
