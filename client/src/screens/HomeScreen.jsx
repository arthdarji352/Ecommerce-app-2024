import React from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  // console.log(products);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <div>{error?.data?.message || error?.error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product, i) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
