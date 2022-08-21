import React from "react";
import "./Category-item.scss";

const CategoryItem = (props) => {
  const { title, ImageSrc } = props.category;
  return (
    <>
      <div className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${ImageSrc})`,
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
