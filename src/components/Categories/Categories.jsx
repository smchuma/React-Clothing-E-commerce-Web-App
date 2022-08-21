import React from "react";
import "./Categories.scss";
import CategoryItem from "../../components/Category-item/CategoryItem";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      ImageSrc: require("../../assets/images/hat.jpg"),
    },
    {
      id: 2,
      title: "Jackets",
      ImageSrc: require("../../assets/images/jackets.jpg"),
    },
    {
      id: 3,
      title: "Sneakers",
      ImageSrc: require("../../assets/images/sneaker2.jpg"),
    },
    {
      id: 4,
      title: "Men",
      ImageSrc: require("../../assets/images/men5.jpg"),
    },
    {
      id: 5,
      title: "Women",
      ImageSrc: require("../../assets/images/woman4.jpg"),
    },
  ];
  return (
    <div className="categories-container">
      <div className="category-container-title">
        <h1>Featured Collections</h1>
      </div>
      <div className="category">
        {categories.map((category) => {
          return <CategoryItem category={category} key={category.id} />;
        })}
      </div>
      <h1>Choose Your Collection</h1>
    </div>
  );
};

export default Categories;
