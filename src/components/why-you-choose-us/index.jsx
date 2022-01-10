import React from 'react';

import { Link } from 'react-router-dom';

const WhyYouChooseUs = () => {
  return (
    <>
      <section className="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2">
        <div className="row">
          <div className="col-12 col-lg-6 mb-lg-0 mb-4">
            <img
              src="http://htmlbeans.com/html/botanical/images/img01.jpg"
              alt="image description"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 pr-4">
            <h2 className="headingII fwEbold playfair position-relative mb-6 pb-5">
              Why choose us ?
            </h2>
            <p className="mb-xl-14 mb-lg-10 text-justify">
              Grøn Verden is the unique plant selling and buying marketplace and
              it focuses on greening the world. Even with more extra features,
              it helps you to understand what a plant needs to grow by using our
              AI helped plant detector. It efficiently works to find similar
              plants by just only seeing the picture of a plant. It also adds
              the scientific name, the related / similar plants to the uploaded
              one ...{' '}
              <Link to="#" className="btnMore">
                <i>Learn More</i>
              </Link>
            </p>
            <ul className="list-unstyled chooseList">
              <li className="d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3">
                <span className="icon icon-plant"></span>
                <div className="alignLeft d-flex justify-content-start flex-wrap">
                  <h3 className="headingIII fwEbold mb-2">Plant List</h3>
                  <p>
                    There are many variations of plants and you can find all the
                    different plants in our shops
                  </p>
                </div>
              </li>
              <li className="d-flex justify-content-start mb-xl-6 mb-lg-5 mb-4">
                <span className="icon icon-ic-plant"></span>
                <div className="alignLeft d-flex justify-content-start flex-wrap">
                  <h3 className="headingIII fwEbold mb-2">Learn</h3>
                  <p>
                    Our learn section helps you to understand and get a better
                    knowledge about the plants as a general.
                  </p>
                </div>
              </li>
              <li className="d-flex justify-content-start">
                <span className="icon icon-desert"></span>
                <div className="alignLeft d-flex justify-content-start flex-wrap">
                  <h3 className="headingIII fwEbold mb-2">
                    AI helped Plant Detection
                  </h3>
                  <p>
                    You can get similar plants with percentage similarity by
                    only uploading a good looking plant image.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyYouChooseUs;
