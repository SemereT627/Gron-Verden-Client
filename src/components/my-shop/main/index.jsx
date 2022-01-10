import React from 'react';
import PlantList from '../plant-list';

const MyShop = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <header className="col-12 mainHeader mb-10 text-center">
            <h1 className="headingIV playfair fwEblod mt-2">Store Name</h1>
            <h1 className="headingIV playfair fwEblod mt-2">
              {/* {myShop[0].shopName} */}Abebe
            </h1>
            <h5 className="playfair fwEblod">Store Description</h5>
            <p className="text-justify">
              {/* {myShop[0].shopDescription} */}Kebede
            </p>
          </header>
        </div>
        <PlantList />
      </div>
    </>
  );
};

export default MyShop;
