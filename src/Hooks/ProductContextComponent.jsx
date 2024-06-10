import { createContext, useEffect, useState } from "react";
import importData from "@/Utils/productList.json";

export const ProductContext = createContext();

const ProductContextComponent = ({ children }) => {
  const [Data, setData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(importData);
    setFilteredData(importData);
  }, []);

  const filterByCategory = (category) => {
    return null;
  }

  const filterByMeasure = (measure) => {
    return null;
  }

  const filterByProvider = (provider) => {
    return null;
  }

  const resetData = () => {
    setFilteredData(Data);
  };

  const data = {
    FilteredData,
    resetData,
    filterByCategory,
    filterByMeasure,
    filterByProvider
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductContextComponent;
