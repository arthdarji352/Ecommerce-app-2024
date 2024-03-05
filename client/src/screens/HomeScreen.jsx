import React from "react";
import { products } from "../data/products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
