import React from "react";
import data from "@/Utils/productList.json";
import ProductCard from "@/Components/ProductCard/ProductCard";

const TopProducts = () => {
  return (
    <div className="TopProducts">
      <h2>Productos Destacados</h2>
      <section className="productList">
        {data.slice(0,8).map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </section>
    </div>
  );
};

export default TopProducts;
