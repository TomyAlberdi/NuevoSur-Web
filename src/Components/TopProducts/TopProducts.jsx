import React, { useEffect, useState } from "react";
import data from "@/Utils/productList.json";
import ProductCard from "@/Components/ProductCard/ProductCard";

const TopProducts = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    let getProductsUrl = `http://localhost:8080/product/list?size=8`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.content);
      })
      .catch((err) => console.error(err));
  })

  return (
    <div className="TopProducts">
      <h2>Productos Destacados</h2>
      <section className="productList">
        {Data?.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </section>
    </div>
  );
};

export default TopProducts;
