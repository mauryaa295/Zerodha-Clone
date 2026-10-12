import React from "react";

function Hero() {
  return (
    <>
      <div
        className="container "
        style={{ marginTop: "170px" }}
      >
        <div className="text-center text-muted">
          <h1 className="fs-3 mb-3">Zerodha Products</h1>
        <h2 className="fs-5 mb-4">Sleek, modern, and intuitive trading platforms</h2>
        <p className="fs-6">
          Check out our{" "}
          <a href="#" style={{ textDecoration : "none" }}>
            {" "}
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long "></i>
          </a>{" "}
        </p>
        </div>
        
      </div>
    </>
  );
}

export default Hero;
