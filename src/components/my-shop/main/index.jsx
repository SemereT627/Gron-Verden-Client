import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopsAsync } from '../../../store/shop/action';
import PlantList from '../plant-list';

const MyShop = () => {
  const dispatch = useDispatch();
  const { shops, fetchShopsLoading, fetchShopsSuccess, fetchShopsError } =
    useSelector((state) => state.shop);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchShopsAsync());
  }, []);

  const myShop = shops.filter((shop) => {
    return shop.shopOwner === user._id;
  });

  console.log(myShop);

  return (
    <>
      <div className="container">
        <div className="row">
          <header className="col-12 mainHeader mb-10 text-center">
            <h1 className="headingIV playfair fwEblod mt-2">Store Name</h1>
            <h1 className="headingIV playfair fwEblod mt-2">
              {myShop[0].shopName}
            </h1>
            <h5 className="playfair fwEblod">Store Description</h5>
            <p>{myShop[0].shopDescription}</p>
          </header>
        </div>
        <PlantList />
      </div>
    </>
  );
};

export default MyShop;
