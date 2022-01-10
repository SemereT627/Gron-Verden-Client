import React from 'react';

const ShopFilter = () => {
  return (
    <>
      <div className="col-12 col-lg-3 order-lg-1">
        <aside id="sidebar">
          <section className="widget overflow-hidden mb-9">
            <form action="#;" className="searchForm position-relative border">
              <fieldset>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search product..."
                />
                <button className="position-absolute">
                  <i className="icon-search"></i>
                </button>
              </fieldset>
            </form>
          </section>
          <section className="widget overflow-hidden mb-9">
            <h3 className="headingVII fwEbold text-uppercase mb-5">PLANT TYPE</h3>
            <ul className="list-unstyled categoryList mb-0">
              <li className="mb-5 overflow-hidden">
                <a href="#;">
                  Table Tree Plants <span className="num border float-right"></span>
                </a>
              </li>
              <li className="mb-5 overflow-hidden">
                <a href="#;">
                  Indoor Plant <span className="num border float-right"></span>
                </a>
              </li>
              <li className="mb-4 overflow-hidden">
                <a href="#;">
                  Office Plant <span className="num border float-right"></span>
                </a>
              </li>
              <li className="mb-5 overflow-hidden">
                <a href="#;">
                  House Plant <span className="num border float-right"></span>
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="#;">
                  Cactus Plant <span className="num border float-right"></span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </>
  );
};

export default ShopFilter;
