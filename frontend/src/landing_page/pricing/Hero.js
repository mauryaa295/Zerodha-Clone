import React from "react";

function Hero() {
  return (
    <>
      <div className="container" style={{ marginTop: "170px" }}></div>
      <div className="row text-center">
        <h1 className="fs-3 mb-3">Charges</h1>
        <h2 className="text-muted fs-5">List of all charges and taxes</h2>
        <div className="row  " style={{padding:"105px"}}>
          <div className="col-4 ">
            <img src="/media/imgs/pricingMF.svg" alt="" style={{width:"65%"}} className=""/>
            <h1 className="mt-4 fs-2">Free equity delivery</h1>
            <p className="text-muted mt-4">
              All equity delivery investments (NSE, BSE), <br /> are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <img src="/media/imgs/intradayTrades.svg" alt="" style={{width:"65%"}}/>
            <h1 className="mt-4 fs-2">Intraday and F&O trades</h1>
            <p className="text-muted mt-4">
              Flat ₹ 20 or 0.03% (whichever is lower) per <br />
              executed order on intraday trades across <br />
              equity, currency, and commodity trades. Flat <br />
              ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img src="/media/imgs/pricingMF.svg" alt="" style={{width:"65%"}} />
            <h1 className="mt-4 fs-2">Free direct MF</h1>
            <p className="text-muted mt-4">
              All direct mutual fund investments are <br /> absolutely free — ₹
              0 commissions & DP <br /> charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
