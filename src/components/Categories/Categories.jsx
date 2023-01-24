import React from "react";
import "./Categories.scss";
import { CategoryItem } from "../../components";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "T-SHIRTS",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566854/t-shirt_w1bjr9.jpg",
    },
    {
      id: 2,
      title: "JACKETS",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566646/jackets_gal6ia.jpg",
    },
    {
      id: 3,
      title: "WATCHES",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566072/watch_e2zspg.jpg",
    },
    {
      id: 4,
      title: "SNEAKERS",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566900/sneaker2_yfj4gy.jpg",
    },
    {
      id: 5,
      title: "JEANS",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566944/jeans_etbjqh.jpg",
    },

    {
      id: 6,
      title: "SUITS",
      ImageSrc:
        "https://res.cloudinary.com/smchuma/image/upload/v1674566976/suits_mrrckr.jpg",
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

      <div className="shape-divider2">
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
  );
};

export default Categories;
