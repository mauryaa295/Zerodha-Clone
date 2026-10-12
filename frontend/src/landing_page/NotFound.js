import React from "react";

function NotFound() {
  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <div className=" mb-5 d-flex flex-column align-items-center">
          <h1 className=" mt-5 mb-4 fs-3">404 Not Found</h1>
          <p className=" text-muted" style={{ marginBottom: "150px" }}>
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
