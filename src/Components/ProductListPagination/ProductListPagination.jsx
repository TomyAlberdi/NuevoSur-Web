import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import ProductCard from "@/Components/ProductCard/ProductCard";

const ProductListPagination = () => {
  const { FilteredData } = useContext(ProductContext);

  const itemsPerPage = 9;
  const [CurrentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = CurrentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const [CurrentCards, setCurrentCards] = useState([]);
  const pageNumbers = Array.from(
    { length: Math.ceil((FilteredData?.length || 0) / itemsPerPage) },
    (_, i) => i + 1
  );

  useEffect(() => {
    setCurrentCards(FilteredData?.slice(indexOfFirstCard, indexOfLastCard));
  }, [FilteredData, CurrentPage, indexOfFirstCard, indexOfLastCard]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
    scrollUp();
  };

  const handleClickNext = () => {
    if (CurrentPage < pageNumbers.length) {
      setCurrentPage(CurrentPage + 1);
      scrollUp();
    }
  };

  const handleClickPrev = () => {
    if (CurrentPage > 1) {
      setCurrentPage(CurrentPage - 1);
      scrollUp();
    }
  };

  const renderPageNumbers = pageNumbers.map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        id={pageNumber}
        className={pageNumber === CurrentPage ? "active" : ""}
        onClick={handleClick}
      >
        {pageNumber < 10 ? [0, pageNumber] : { pageNumber }}
      </li>
    );
  });

  return (
    <section className="ProductListPagination">
      {!FilteredData ? (
        <h2 className="defaultMessage">No hay productos disponibles</h2>
      ) : (
        <>
          <div className="cardContainer">
            {CurrentCards?.map((data, index) => (
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
            {FilteredData ? renderPageNumbers : null}
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
