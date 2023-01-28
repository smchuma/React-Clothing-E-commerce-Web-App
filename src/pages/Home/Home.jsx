import React from "react";
import { Link } from "react-router-dom";
import { Banner, Categories } from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <h1>
            Zenku <span>shop</span>
          </h1>
          <Link to="/shop">
            <button className="btn-primary">Shop Now</button>
          </Link>
        </div>
        <div className="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <Categories />
      <Banner />
    </>
  );
};

export default Home;
