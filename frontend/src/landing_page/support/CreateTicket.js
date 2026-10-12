import React from "react";

function CreateTicket() {
  return (
    <>
      <div className="container ">
        <div className="row mb-5" style={{ marginTop: "70px" }}>
          <div className="col-8 text-muted supportCss ">
            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i className="fa-solid fa-circle-plus fs-5 px-3 text-primary"></i>
              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Account Opening</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>

            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i class="fa-regular fa-circle-user fs-5 px-3 text-primary"></i>

              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Your Zerodha Account</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>

            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i class="fa-brands fa-square-xing fs-5 px-3 text-primary"></i>

              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Kite</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>

            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i class="fa-solid fa-indian-rupee-sign fs-5 px-3 text-primary"></i>
              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Funds</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>

            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i class="fa-solid fa-terminal fs-5 px-3 text-primary"></i>

              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Console</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>

            <div className="hover-card-zoom border d-flex align-items-center p-2 mt-4">
              <i class="fa-solid fa-coins fs-5 px-3 text-primary"></i>
              <div className="flex-grow-1  ms-5 d-flex align-items-center justify-content-between ">
                <h4>Coin</h4>
                <i className="fa-solid fa-angle-down text-primary"></i>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="row   bg-primary-subtle mb-3">
              <div className="col-1 bg-warning"></div>
              <div className="col-11 py-4">
                <ul >
                  <li><a href="#" style={{fontSize:"large"}}>Additional exposure margin on securities under MWPL</a></li>
                  <li><a href="#" style={{fontSize:"large"}}>Offer for sale (OFS) – August 2026</a></li>
                </ul>
              </div>
            </div>

            <div className="">
              <h6 className="ps-4 py-3 bg-info-subtle">Quick links</h6>
              <ol className="ps-5 bg-info-subtle">
                <li className="py-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Track Account Opening
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Track segment activation
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Intraday margins
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Kite user manuals
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Learn how to create ticket
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
