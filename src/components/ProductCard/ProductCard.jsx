import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <>
      <div className="gallery">
        <div className="content">
          <img src={imageUrl} alt={name} />
          <h3>T-Shirt</h3>
          <div className="details">
            <p>{name}</p>
            <h6>KSH {price}</h6>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
