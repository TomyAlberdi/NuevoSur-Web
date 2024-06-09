import React, { useContext } from "react";

import { ProductContext } from "@/Hooks/ProductContextComponent";
import ProductListPagination from '@/Components/ProductListPagination/ProductListPagination';
import ProductListFilters from '@/Components/ProductListFilters/ProductListFilters';

const ProductList = () => {
  const { FilteredData, setFilteredData } = useContext(ProductContext);

  return <div className="productList">
    <ProductListFilters />
    <ProductListPagination />
  </div>;
};

export default ProductList;
