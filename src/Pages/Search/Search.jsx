import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { RxCross1 } from "react-icons/rx";
import Skeleton from "@mui/material/Skeleton";

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();
  const { BASE_URL } = useContext(ProductContext);

  useEffect(() => {
    const searchQuery = `${BASE_URL}/product/search?keyword=${query}`;
    fetch(searchQuery)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  return (
    <section className="Search">
      <div className="searchHeader">
        <h2>Resultados para: {query}</h2>
      </div>
      <div className="searchResults">
        {loading ? (
          [...Array(5)].map((index) => {
            return (
              <Skeleton key={index} variant="rectangular" animation="wave" className="skeletonCard" />
            );
          })
        ) : results.length > 0 ? (
          results.map((item, index) => <ProductCard data={item} key={index} />)
        ) : (
          <div className="noResultPanel">
            <span>
              <RxCross1 />
              No se encontraron resultados
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
