import React from "react";

function Hero() {
  return (
    <div className="container p-5" style={{marginTop:"70px"}}>
      <div className="row text-center">
        <img className="mb-5" src="media/imgs/homeHero.png" alt="HeroImage" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="mb-5 btn btn-primary p-1.5 fs-5"
          style={{ margin: "0 auto", width: "20%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
