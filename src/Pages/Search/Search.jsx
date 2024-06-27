import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { RxCross1 } from "react-icons/rx";

const Search = () => {
  const [Results, setResults] = useState([]);

  const { handleSearch } = useContext(ProductContext);

  const { query } = useParams();

  useEffect(() => {
    setResults(handleSearch(query));
  }, [query]);

  return (
    <section className="Search">
      <div className="searchHeader">
        <h2>Resultados para: {query}</h2>
      </div>
      <div className="searchResults">
        {Results.length > 0 ? (
          Results.map((item, index) => <ProductCard data={item} key={index} />)
        ) : (
          <div className="noResultPanel">
            <span>
              <RxCross1 />
              No se encontraron resultados</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
