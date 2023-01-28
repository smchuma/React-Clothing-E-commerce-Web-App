import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../Context/ProductsContenxt";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <div className="products">
        <div className="products-banner">
          <h1>T-Shirts</h1>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
