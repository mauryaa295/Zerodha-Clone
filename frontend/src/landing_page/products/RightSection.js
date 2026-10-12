import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container">
        <div
          className="row border p-5 fw-semibold"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div
            className="col-4  text-muted"
            style={{
              marginTop: "30px",
              marginBottom: "100px",
              paddingTop: "55px",
              paddingLeft: "15px",
            }}
          >
            <h1 className="mb-4 fs-3">{productName}</h1>
            <p style={{ lineHeight: "1.7" }}>{productDescription}</p>
            <div className="mb-5 mt-4 d-flex ">
              <a
                href={learnMore}
                style={{  textDecoration: "none" }}
              >
                Learn More <i className="fa-solid fa-arrow-right-long "></i>
              </a>
            </div>
          </div>
          <div
            className="col-8"
            style={{ marginTop: "30px", marginBottom: "100px" }}
          >
            <img src={imageURL} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
