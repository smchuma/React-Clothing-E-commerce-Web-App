import React from "react";
import containerImage from "../../assets/images/men1.png";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import News from "../../components/News/News";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <h1>
            Zenku <span>shop</span>
          </h1>
          <p>
            We have all the clothes, hats, sneakers that you want. Start
            shopping Today{" "}
          </p>
          <button className="btn-primary">Shop Now</button>
        </div>
        <div className="container-image">
          <img alt="image1" src={containerImage} />
        </div>
      </div>
      <Categories />
      <Banner />
      <News />
    </>
  );
};

export default Home;
