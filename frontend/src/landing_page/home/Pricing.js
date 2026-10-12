import React from "react";

function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row mb-5 mt-5">
          <div className="col-4 mb-5">
            <h1 className="fs-2 mb-5">Unbeatable pricing</h1>
            <p className="">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              See pricing <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-8 ">
            <div className="row  m-0">
              <div className="col-4 d-flex flex-row">
                <img
                  className=""
                  style={{ width: "60%" }}
                  src="/media/imgs/pricingEquity.svg"
                  alt=""
                />
                <div className="d-flex justify-content-center align-items-end">
                  <p className="text-muted" style={{ fontSize: "0.6rem" }}>
                    Free account <br />
                    opening
                  </p>
                </div>
              </div>
              <div className="col-4  d-flex flex-row ">
                <img
                  className=""
                  style={{ width: "60%" }}
                  src="/media/imgs/pricingEquity.svg"
                  alt=""
                />
                <div className="d-flex justify-content-center align-items-end">
                  <p className="text-muted" style={{ fontSize: "0.6rem" }}>
                    Free equity delivery <br />
                    and direct mutual funds
                  </p>
                </div>
              </div>
              <div className="col-4 d-flex flex-row ">
                <img
                  className=""
                  style={{ width: "60%" }}
                  src="/media/imgs/intradayTrades.svg"
                  alt=""
                />
                <div className="d-flex justify-content-center align-items-end">
                  <p className="text-muted" style={{ fontSize: "0.6rem" }}>
                    Intraday and <br />
                    F&O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
