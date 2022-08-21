import React from "react";
import "./Banner.scss";
import bannerImage from "../../assets/images/women1.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <img alt="image1" src={bannerImage} />
      </div>
      <div className="banner-text">
        <h2>Delivering Smiles & Confidence</h2>
        <p>
          Being able to effectively dress smart is a rough journey that involves
          a lot of misses, experiments and lessons to be learned. For any man
          and woman who desires to achieve GQ approved level of smartness, they
          must be ready, committed and patient to cover the journey.
        </p>
      </div>
    </div>
  );
};

export default Banner;
