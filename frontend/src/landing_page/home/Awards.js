import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 ">
          <img src="media/imgs/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5 ">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha client contribute over to 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivetives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. Securities</p>
                </li>
              </ul>
            </div>
            <img
              style={{ width: "90%" }}
              src="media/imgs/pressLogos.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
