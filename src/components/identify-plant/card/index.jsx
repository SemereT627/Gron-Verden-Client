import React from 'react';
import { Card, Avatar, Row, Col, Divider, Image } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './style.css';

const IdentifyPlantCard = ({ plant }) => {
  {
    console.log(plant);
  }
  return (
    <>
      <div id="container">
        <div class="product-details">
          <Row>
            <Col span={12}>
              <h1>
                {plant.plant_name.toString().charAt(0).toUpperCase() +
                  plant.plant_name.toString().slice(1)}
              </h1>
            </Col>
            <Col span={12}>
              <span>{`${(plant.probability * 100).toFixed(2)}%`}</span>
            </Col>
          </Row>

          <p class="information">
            Similar Images
            <Row>
              {/* {plant} */}
              {plant.similar_images.slice(1).map((plant) => {
                return (
                  <Col span={11}>
                    <Image
                      // style={{ marginLeft: '5px', marginRight: '5px' }}
                      src={`${plant}`}
                    ></Image>
                  </Col>
                );
              })}
            </Row>
          </p>

          <div class="control">
            {/* <button class="btn">
              <span class="price">$250</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Get now</span>
            </button> */}
          </div>
        </div>

        <div class="product-image">
          <img src={plant.similar_images[0]} alt="" />

          <div class="info">
            <h2 strong>Taxonomy</h2>

            {/* <ul>
              <li>
                <strong>Height : </strong>5 Ft{' '}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>URL: </strong>
                {plant.plant_details.url}
              </li>
            </ul> */}
            <Row>
              {Object.keys(plant.plant_details.taxonomy).map((key) => {
                return (
                  <>
                    <Col span={10}>{key}</Col>
                    <Col span={14}>{plant.plant_details.taxonomy[key]}</Col>
                    <Divider style={{ margin: 0 }}></Divider>
                  </>
                );
              })}
            </Row>
          </div>
        </div>
      </div>

      {/* <Card
        cover={<img alt="predict" src={plant.similar_images[2]} />}
        className="box-shadow"
      >
        <h2 className="playfair float-left mr-5">{plant.scientificName}</h2>
        <div className="d-flex circleBase type3 px-1 py-2 font-weight-bold">
          {plant.probability.toFixed(2)}%
        </div>
        <br />

        <div className="float-left text-dark text-justify">
          <br />
          {plant.wikiDescription}
          <br />
          <a href={plant.url} className="m-5">
            Learn More
          </a>
        </div>
      </Card> */}
    </>
  );
};

export default IdentifyPlantCard;
