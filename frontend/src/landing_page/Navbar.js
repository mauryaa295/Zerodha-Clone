import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        style={{ backgroundColor: "#FFF" }}
        className=" navbar navbar-expand-lg border-bottom border-secondary-subtle fixed-top"
      >
        <div className="container p-2">
          <Link className="navbar-brand" to={"/"}>
            <img
              style={{ width: "22%" }}
              src="media/imgs/logo.svg"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    className="nav-link text-white btn btn-info px-4 py-2 fw-semibold"
                    style={{
                      backgroundColor: "#3a86c8",
                      borderColor: "#3a86c8",
                      borderRadius: "6px",
                    }}
                    href="https://zerodha-clone-1-8zeh.onrender.com"
                  >
                    Demo
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={"/products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <Link
                  className="nav-link active text-muted"
                  aria-current="page"
                  to={"/"}
                >
                  Signup
                </Link>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={"/support"}>
                    Support
                  </Link>
                </li>
              </ul>
            </form>
            {/* <i className="fa-solid fa-bars fa-lg"></i> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
