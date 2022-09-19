import React from "react";
import "./Categories.scss";
import CategoryItem from "../../components/Category-item/CategoryItem";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "T-Shirts",
      ImageSrc: require("../../assets/images/t-shirt.jpg"),
    },
    {
      id: 2,
      title: "Jackets",
      ImageSrc: require("../../assets/images/jackets.jpg"),
    },
    {
      id: 3,
      title: "Watches",
      ImageSrc: require("../../assets/images/watch.jpg"),
    },
    {
      id: 4,
      title: "Sneakers",
      ImageSrc: require("../../assets/images/sneaker2.jpg"),
    },
    {
      id: 5,
      title: "Jeans",
      ImageSrc: require("../../assets/images/jeans.jpg"),
    },

    {
      id: 6,
      title: "T-Shirts",
      ImageSrc: require("../../assets/images/t-shirt.jpg"),
    },
    {
      id: 6,
      title: "Suits",
      ImageSrc: require("../../assets/images/suits.jpg"),
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
      <h1 className="text">Choose Your Collection</h1>

      <div class="custom-shape-divider-bottom-1663606553">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Categories;
