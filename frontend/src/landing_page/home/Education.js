import React from "react";

function Education() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6  mb-5">
            <img
              src="/media/imgs/education.svg"
              alt=""
              style={{ width: "80%" }}
              className=""
            />
          </div>

          <div className="col-6">
            <h1 className="fs-2 mb-5 ">Free and open market education</h1>
            <p className="">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/" style={{ textDecoration: "none" }} className="">
              Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
