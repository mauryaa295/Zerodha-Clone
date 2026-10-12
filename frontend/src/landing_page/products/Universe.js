import React from "react";

function Universe() {
  return (
    <>
      <div className="container">
        <div className="row text-center p-5 ">
          <h1 className="fs-4 text-muted mb-4">The Zerodha Universe</h1>
          <p className="text-muted mb-2">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div
            className="mt-5 mb-5 d-flex text-muted fw-semibold justify-content-center align-items-center"
            style={{ fontSize: "0.8rem" }}
          >
            <div className="">
              <img
                src="/media/imgs/zerodhaFundhouse.png"
                alt=""
                style={{ width: "50%" }}
                className="mb-3"
              />
              <p className="">
                Our asset management venture <br /> that is creating simple and
                transparent index <br />
                funds to help you save for your goals.
              </p>
            </div>
            <div className="">
              <img
                className="mb-3 "
                src="/media/imgs/sensibullLogo.svg"
                alt=""
                style={{ width: "80%" }}
              />
              <p className="mb-1 mt-1">
                Options trading platform that lets you <br />
                create strategies, analyze positions, and examine <br /> data
                points like open interest, FII/DII, and more.
              </p>
            </div>
            <div className="">
              <img
                className="mb-3"
                src="/media/imgs/tijori.svg"
                alt=""
                style={{ width: "50%" }}
              />
              <p className="">
                Investment research platform <br />
                that offers detailed insights on stocks,
                <br /> sectors, supply chains, and more.
              </p>
            </div>
          </div>

          <div
            className="border d-flex text-muted fw-semibold justify-content-center align-items-center"
            style={{ fontSize: "0.8rem" }}
          >
            <div className="">
              <img
                src="/media/imgs/streakLogo.png"
                alt=""
                style={{ width: "20%" }}
                className="mb-3"
              />
              <p className="">
                Systematic trading platform <br /> that allows you to create and
                backtest <br />
                strategies without coding.
              </p>
            </div>
            <div className="">
              <img
                src="/media/imgs/smallcaseLogo.png"
                className="mb-3"
                alt=""
                style={{ width: "100%" }}
              />
              <p className="">
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="">
              <img
                className="mb-3"
                src="/media/imgs/dittoLogo.png"
                alt=""
                style={{ width: "20%" }}
              />
              <p className="">
                Personalized advice on life <br /> and health insurance. No spam{" "}
                <br />
                and no mis-selling.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <button
              className="btn btn-primary p-1.5 fs-5"
              style={{ margin: "0 auto", width: "20%" }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
