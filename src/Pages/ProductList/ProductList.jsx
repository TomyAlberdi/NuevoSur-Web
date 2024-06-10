import React from "react";
import ProductListPagination from '@/Components/ProductListPagination/ProductListPagination';
import ProductListFilters from '@/Components/ProductListFilters/ProductListFilters';

const ProductList = () => {
  return <div className="productList">
    <ProductListFilters />
    <ProductListPagination />
  </div>;
};

export default ProductList;
