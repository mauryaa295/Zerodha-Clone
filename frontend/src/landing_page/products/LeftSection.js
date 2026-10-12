import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row border p-5 fw-semibold" style={{marginTop:"100px", marginBottom:"100px"}}>
          <div className="col-8" style={{marginTop:"30px", marginBottom:"100px"}}>
            <img src={imageURL} alt="" />
          </div>
          <div className="col-4  text-muted" style={{marginTop:"30px", marginBottom:"100px", paddingTop:"55px" , paddingLeft: "15px"}}>
            <h1 className="mb-4 fs-3">{productName}</h1>
            <p style={{lineHeight:"1.7"}}>{productDescription}</p>
            <div className="mb-5 mt-4 d-flex " >
              <a href={tryDemo} style={{textDecoration : "none"}}>
                Try Demo <i className="fa-solid fa-arrow-right-long "></i>{" "}
              </a>
              <a href={learnMore} style={{marginLeft:"50px",textDecoration : "none"}}>
                Learn More <i className="fa-solid fa-arrow-right-long "></i>
              </a>
            </div>

            <div>
              <a href={googlePlay}>
                <img src="/media/imgs/googlePlayBadge.svg" alt="" />{" "}
              </a>
              <a href={appStore}  style={{marginLeft:"10px"}}>
                <img src="/media/imgs/appStoreBadge.svg" alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
