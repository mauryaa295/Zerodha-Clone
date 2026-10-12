import React from "react";

function Hero() {
  return (
    <>
      <div className="container" style={{ marginTop: "120px" }}>
        <div className="mb-4  d-flex justify-content-between ">
          <h1 className="text-muted ">Support Portal</h1>
          <button className="btn btn-primary fw-bold" style={{height:"40px", width:"auto"}}>My tickets</button>
        </div>
        <form className="container-fluid">
          <div className="input-group border" style={{borderRadius:"4px", height:"60px"}}>
            <span className="input-group-text " id="basic-addon1" style={{border:"none"}}>
              <i className="fa-solid fa-magnifying-glass fs-5"></i>
            </span>
            <input style={{border:"none"}}
              type="text"
              className="form-control"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Hero;
