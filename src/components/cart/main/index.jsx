import React from 'react';
import CardItem from '../card';

const CardMain = () => {
  return (
    <>
      <div className="cartHolder container pt-xl-21 pb-xl-24 py-lg-20 py-md-16 py-10">
        <div className="row">
          <div className="col-12 table-responsive mb-xl-22 mb-lg-20 mb-md-16 mb-10">
            <table className="table cartTable">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase fwEbold border-top-0">
                    product
                  </th>
                  <th scope="col" className="text-uppercase fwEbold border-top-0">
                    price
                  </th>
                  <th scope="col" className="text-uppercase fwEbold border-top-0">
                    quantity
                  </th>
                  <th scope="col" className="text-uppercase fwEbold border-top-0">
                    total
                  </th>
                </tr>
              </thead>
              <tbody>
                <CardItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMain;
