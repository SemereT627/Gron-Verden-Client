import React from 'react';

const CardItem = () => {
  return (
    <>
      <tr class="align-items-center">
        <td class="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
          <div class="imgHolder">
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              alt="image description"
              class="img-fluid"
              style={{
                height: '80px',
                width: '100px',
              }}
            />
          </div>
          <span class="title pl-2">
            <a href="shop-detail.html">Fan Flower</a>
          </span>
        </td>
        <td class="fwEbold border-top-0 border-bottom px-0 py-6">2900br</td>
        <td class="border-top-0 border-bottom px-0 py-6">
          <input type="number" disabled placeholder="1" />
        </td>
        <td class="fwEbold border-top-0 border-bottom px-0 py-6">
          2900br
          <a href="javascript:void(0);" class="fas fa-times float-right"></a>
        </td>
      </tr>
    </>
  );
};

export default CardItem;
