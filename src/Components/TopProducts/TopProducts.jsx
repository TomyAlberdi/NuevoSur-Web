import React, { useEffect, useState } from "react";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.error("Ocurrió un error al cargar los productos.", {
          position: "bottom-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  }, []);

  return (
    <div className="TopProducts">
      <h2 className="bebas">Productos Destacados</h2>
      <section className="productList">
        <ToastContainer />
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
