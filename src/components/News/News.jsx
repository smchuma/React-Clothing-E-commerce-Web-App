import React from "react";
import "./News.scss";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-input">
        <input type="text" placeholder="Enter your Email" />
      </div>
      <div className="input-title">
        <h2>Sign Up for a Newsletter</h2>
      </div>
    </div>
  );
};

export default News;
