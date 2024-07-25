import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";

const ProductListPagination = () => {
  const { Data, PagInfo, paginationRight, paginationLeft, paginationNumbered } =
    useContext(ProductContext);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (Data.length > 0) {
      setLoading(false);
    }
  }, [Data]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (e) => {
    paginationNumbered(Number(e.target.id));
    scrollUp();
  };

  const handleClickPrev = () => {
    paginationLeft();
    scrollUp();
  };

  const handleClickNext = () => {
    paginationRight();
    scrollUp();
  };

  const renderPageNumbers =
    PagInfo.totalPages > 0
      ? Array.from({ length: PagInfo.totalPages }).map((_, index) => {
          return (
            <li
              key={index}
              id={index}
              className={index === PagInfo.number ? "active" : ""}
              onClick={handleClick}
            >
              {index < 10 ? [0, index + 1] : { index }}
            </li>
          );
        })
      : null;

  return (
    <section className="ProductListPagination">
      {Data.length === 0 ? (
        <h2 className="defaultMessage">No hay productos disponibles</h2>
      ) : (
        <>
          <div className="cardContainer">
            {Loading
              ? [...Array(9)].map((index) => {
                  return (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      animation="wave"
                      className="skeletonCard"
                    />
                  );
                })
              : Data?.map((data, index) => (
                  <ProductCard key={index} data={data} />
                ))}
          </div>
          <ul>
            <svg
              onClick={handleClickPrev}
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8H0.75"
                stroke="#d1594c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 1.25L0.75 8L7.5 14.75"
                stroke="#d1594c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {Data ? renderPageNumbers : null}
            <svg
              onClick={handleClickNext}
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 8H17.25"
                stroke="#d1594c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 14.75L17.25 8L10.5 1.25"
                stroke="#d1594c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ul>
        </>
      )}
    </section>
  );
};

export default ProductListPagination;
