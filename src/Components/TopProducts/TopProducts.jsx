import React, { useEffect, useState } from "react";
import data from "@/Utils/productList.json";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";

const TopProducts = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let getProductsUrl = `http://localhost:8080/product/list?size=8`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="TopProducts">
      <h2>Productos Destacados</h2>
      <section className="productList">
        {Loading
          ? [...Array(8)].map((index) => {
              return (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  animation="wave"
                  className="skeletonCard"
                />
              );
            })
          : Data?.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
      </section>
    </div>
  );
};

export default TopProducts;
