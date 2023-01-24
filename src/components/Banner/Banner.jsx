import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img
        alt="image1"
        src="https://res.cloudinary.com/smchuma/image/upload/v1674567038/men1_qoyj5h.png"
      />
      <div className="banner-text">
        <h2>Delivering Smiles & Confidence</h2>
        <p>
          Being able to effectively dress smart is a rough journey that involves
          a lot of misses, experiments and lessons to be learned. For any man
          who desires to achieve GQ approved level of smartness, they must be
          ready, committed and patient to cover the journey.
        </p>
      </div>
    </div>
  );
};

export default Banner;
