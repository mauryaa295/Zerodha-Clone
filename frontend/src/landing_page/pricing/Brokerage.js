import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" mb-5 mt-5 text-muted">
            <h1 className="fs-4 mb-4">Charges for account opening</h1>
            <div
              className="pt-2 ps-3 fw-semibold border-top border-start border-end d-flex align-items-center "
              style={{ gap: "530px" }}
            >
              <p className="">Type of account</p>
              <p>Charges</p>
            </div>
            <div className=" border">
              <div
                className="pt-2 ps-3 d-flex align-items-center "
                style={{ gap: "520px" }}
              >
                <p>Individual account</p>
                <div
                  className="fw-semibold bg-success text-white text-center d-inline-block px-3 py-1"
                  style={{ fontSize: "0.8rem", borderRadius: "3px" }}
                >
                  FREE
                </div>
              </div>
              <div
                className="pt-2 ps-3 d-flex align-items-center "
                style={{ gap: "545px" }}
              >
                <p>Minor account</p>
                <div
                  className="fw-semibold bg-success text-white text-center d-inline-block px-3 py-1"
                  style={{ fontSize: "0.8rem", borderRadius: "3px" }}
                >
                  FREE
                </div>
              </div>
              <div
                className="pt-2 ps-3 d-flex align-items-center "
                style={{ gap: "563px" }}
              >
                <p>NRI account</p>
                <p>₹ 500</p>
              </div>
              <div
                className="pt-2 ps-3 d-flex align-items-center "
                style={{ gap: "558px" }}
              >
                <p>HUF account</p>
                <div>
                  <div
                    className="fw-semibold bg-success text-white text-center d-inline-block px-3 py-1"
                    style={{ fontSize: "0.8rem", borderRadius: "3px" }}
                  >
                    FREE
                  </div>
                  <p className="d-inline-block">(online) / ₹ 500 (offline)</p>
                </div>
              </div>
              <div
                className="pt-2 ps-3 d-flex align-items-center "
                style={{ gap: "270px" }}
              >
                <p>Partnership, LLP, and Corporate accounts (offline only)</p>
                <p>₹ 500</p>
              </div>
            </div>
          </div>

          <h1 className="mb-4 mt-5 fs-4">Charges explained</h1>
          <div className="mb-5 row special-box text-muted">
            <div className="col-6">
              <h1>Securities/Commodities transaction tax</h1>
              <p>
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>

              <h1>Transaction/Turnover Charges</h1>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
                <br />
                <br />
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017)
                <br />
                <br />
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
                <br />
                <br />
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips (non-exclusive scrips from group E, F, FC, G,
                GC, W, T) at ₹375 per crore of turnover on flat rate basis
                w.e.f. December 1, 2022.
                <br />
                <br />
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
              <h1>Call & trade</h1>
              <p>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </div>
            <div className="col-6">
              <h1>GST</h1>
              <p>
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges + transaction charges)
              </p>
              <h1>SEBI Charges</h1>
              <p>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </p>
              <h1>DP (Depository participant) charges</h1>
              <p>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity. <br />
                <br /> Female demat account holders (as first holder) will enjoy
                a discount of ₹0.25 per transaction on the CDSL fee. <br />
                <br /> Debit transactions of mutual funds & bonds get an
                additional discount of ₹0.25 on the CDSL fee.
              </p>
              <h1>Pledging charges</h1>
              <p>₹30 + GST per pledge request per ISIN.</p>
              <h1>AMC (Account maintenance charges)</h1>
              <p>
                Free for the first year on all new resident individual accounts.
                <br />
                <br />
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA, Click here
                <br />
                <br />
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days). To learn more about AMC, Click here
              </p>
            </div>
          </div>

          <h1 className="mt-5 fs-6 text-muted">Disclaimer</h1>
          <p className="mt-3 text-muted mb-5" style={{ fontSize: "0.8rem" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
