import React from "react";

function OpenAccount() {
  return (
    <>
      <div className="container">
        <div className="mt-5 mb-5 d-flex flex-column align-items-center">
          <h1 className="mb-4 fs-3">Open a Zerodha account</h1>
          <p className="mb-4 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary p-1.5 fs-5"
            style={{ margin: "0 auto", width: "20%" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
