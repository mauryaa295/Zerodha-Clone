import React from "react";

function Team() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <h1 className="text-muted fs-4 text-center mb-5 ">People</h1>
          <div
            className="row text-muted"
            style={{ padding: "30px", fontSize: "1.05em", lineHeight: "1.8" }}
          >
            <div className="col-6 text-center">
              <img
                src="media/imgs/nithinKamath.jpg"
                alt="FounderImage"
                style={{ borderRadius: "100%", width: "55%" }}
              />
              <h5 className="mt-4">Nithin Kamath</h5>
              <h6 className="mt-4">Founder, CEO</h6>
            </div>
            <div className="col-6 p-0">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>

              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>

              <p>Playing basketball is his zen.</p>

              <p>
                Connect on {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                   Homepage
                </a>
                / 
                <a href="#" style={{ textDecoration: "none" }}>
                  {" "}
                  TradingQnA
                </a>
                / {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                   Twitter
                </a>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
