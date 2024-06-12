import { createContext, useEffect, useState } from "react";
import importData from "@/Utils/productList.json";

export const ProductContext = createContext();

const ProductContextComponent = ({ children }) => {
  const [Data, setData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  const resetData = () => {
    setFilteredData(Data);
  };

  // CATEGORIES //////////////////////////////////////////////////////////////////
  const [CategoryList, setCategoryList] = useState([]);

  const mapCategories = () => {
    const categoryCount = {};
    Data?.forEach(({ category }) => {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    const result = Object.keys(categoryCount).map((category, index) => ({
      id: index,
      Category: category,
      Quantity: categoryCount[category],
      Checked: false,
    }));
    setCategoryList(result);
  };

  const handleCategoryCheckboxChange = (id) => {
    const updatedItems = CategoryList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          filterByCategory(item.Category);
        } else {
          setUncheckAll(!UncheckAll);
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });
    setCategoryList(updatedItems);
  };
  ////////////////////////////////////////////////////////////////////////////////

  // PROVIDERS //////////////////////////////////////////////////////////////////
  const [ProviderList, setProviderList] = useState([]);

  const mapProviders = () => {
    const providerCount = {};
    Data?.forEach(({ provider }) => {
      providerCount[provider] = (providerCount[provider] || 0) + 1;
    });

    const result = Object.keys(providerCount).map((provider, index) => ({
      id: index,
      Provider: provider,
      Quantity: providerCount[provider],
      Checked: false,
    }));
    setProviderList(result);
  };

  const handleProviderCheckboxChange = (id) => {
    const updatedItems = ProviderList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          filterByProvider(item.Provider);
        } else {
          setUncheckAll(!UncheckAll);
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });
    setProviderList(updatedItems);
  };
  ////////////////////////////////////////////////////////////////////////////////

  // MEASURES //////////////////////////////////////////////////////////////////
  const [MeasureList, setMeasureList] = useState([]);

  const mapMeasures = () => {
    const measureCount = {};
    Data?.forEach(({ measures }) => {
      measureCount[measures] = (measureCount[measures] || 0) + 1;
    });

    const result = Object.keys(measureCount).map((measures, index) => ({
      id: index,
      Measure: measures,
      Quantity: measureCount[measures],
      Checked: false,
    }));

    setMeasureList(result);
  };

  const handleMeasureCheckboxChange = (id) => {
    const updatedItems = MeasureList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          filterByMeasure(item.Measure);
        } else {
          setUncheckAll(!UncheckAll);
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });
    setMeasureList(updatedItems);
  };
  ////////////////////////////////////////////////////////////////////////////////

  /* 
    ENCONTRAR LA MANERA UTILIZAR setUncheckAll(!UncheckAll); DE MANERA CORRECTA
    COMPORTAMIENTO ACTUAL:
      TODAS LAS CHECKBOX SE DESACTIVAN SOLO CUANDO SE HACE CLICK EN UNA CHECKBOX PARA DESACTIVARLA
    COMPORTAMIENTO DESEADO:
      TODAS LAS CHECKBOX TAMBIÉN SE DESACTIVAN SI SE CAMBIA DE CHECKBOXES DENTRO DE UNA MISMA LISTA
      Solución probable:
      if (item.id !== id && item.Checked) {
        setUncheckAll(!UncheckAll);
      }
  */

  const [UncheckAll, setUncheckAll] = useState(false);

  useEffect(() => {
    setCategoryList(CategoryList.map((item) => ({ ...item, Checked: false })));
    setProviderList(ProviderList.map((item) => ({ ...item, Checked: false })));
    setMeasureList(MeasureList.map((item) => ({ ...item, Checked: false })));
    resetData();
  }, [UncheckAll]);

  useEffect(() => {
    mapProviders();
    mapMeasures();
    mapCategories();
  }, [Data]);

  useEffect(() => {
    setData(importData);
    setFilteredData(importData);
  }, []);

  const filterByCategory = (category) => {
    console.log(category);
    return null;
  };

  const filterByMeasure = (measure) => {
    console.log(measure);
    return null;
  };

  const filterByProvider = (provider) => {
    console.log(provider);
    return null;
  };

  const data = {
    Data,
    FilteredData,
    resetData,
    setUncheckAll,
    // Providers
    ProviderList,
    handleProviderCheckboxChange,
    filterByProvider,
    // Measures
    MeasureList,
    handleMeasureCheckboxChange,
    filterByMeasure,
    // Categories
    CategoryList,
    handleCategoryCheckboxChange,
    filterByCategory,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductContextComponent;
