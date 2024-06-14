import { createContext, useEffect, useState } from "react";
import importData from "@/Utils/productList.json";

export const ProductContext = createContext();

const ProductContextComponent = ({ children }) => {
  const [Data, setData] = useState([]);

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
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "category"
    );

    const updatedItems = CategoryList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "category", value: item.Category });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setCategoryList(updatedItems);
    filterData(newAppliedFilters);
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
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "provider"
    );

    const updatedItems = ProviderList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "provider", value: item.Provider });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setProviderList(updatedItems);
    filterData(newAppliedFilters);
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
      Measures: measures,
      Quantity: measureCount[measures],
      Checked: false,
    }));

    setMeasureList(result);
  };

  const handleMeasureCheckboxChange = (id) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "measures"
    );

    const updatedItems = MeasureList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "measures", value: item.Measures });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setMeasureList(updatedItems);
    filterData(newAppliedFilters);
  };
  ////////////////////////////////////////////////////////////////////////////////

  // PRICE //////////////////////////////////////////////////////////////////////

  const [MinPrice, setMinPrice] = useState(0)
  const [MaxPrice, setMaxPrice] = useState(0)

  const getMinMaxPrice = () => {
    const minPriceLocal = Data?.reduce((min, product) => {
      return Math.min(min, product.price);
    }, Infinity);
    const maxPriceLocal = Data?.reduce((max, product) => {
      return Math.max(max, product.price);
    }, -Infinity);

    setMinPrice(minPriceLocal)
    setMaxPrice(maxPriceLocal)

  };

  const handlePriceRangeChange = (range) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "price"
    );

    newAppliedFilters.push({ type: "price", value: range });

    setAppliedFilters(newAppliedFilters);
    filterData(newAppliedFilters);
  }

  ////////////////////////////////////////////////////////////////////////////////

  // DISCOUNT ///////////////////////////////////////////////////////////////////

  const handleDiscountCheckboxChange = (checked) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "discount"
    );

    if (checked) {
      newAppliedFilters.push({ type: "discount", value: true });
    }

    setAppliedFilters(newAppliedFilters);
    filterData(newAppliedFilters);
  }

  ////////////////////////////////////////////////////////////////////////////////

  // FILTER LOGIC ///////////////////////////////////////////////////////////////

  const [FilteredData, setFilteredData] = useState([]);
  const [AppliedFilters, setAppliedFilters] = useState([]);

  const resetData = () => {
    setFilteredData(Data);
  };

  const filterData = (appliedFilters) => {
    let filteredData = Data;

    appliedFilters.forEach((filter) => {
      if (filter.type === "category") {
        filteredData = filteredData.filter(
          (product) => product.category === filter.value
        );
      }
      if (filter.type === "provider") {
        filteredData = filteredData.filter(
          (product) => product.provider === filter.value
        );
      }
      if (filter.type === "measures") {
        filteredData = filteredData.filter(
          (product) => product.measures === filter.value
        );
      }
      if (filter.type === "price") {
        filteredData = filteredData.filter(
          (product) => product.price >= filter.value[0] && product.price <= filter.value[1]
        );
      }
      if (filter.type === "discount") {
        filteredData = filteredData.filter(
          (product) => product.discount !== false
        );
      }
    });

    setFilteredData(filteredData);
  };

  ////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    mapProviders();
    mapMeasures();
    mapCategories();
    getMinMaxPrice();
  }, [Data]);

  useEffect(() => {
    setData(importData);
    setFilteredData(importData);
  }, []);

  const data = {
    Data,
    FilteredData,
    resetData,
    // Providers
    ProviderList,
    handleProviderCheckboxChange,
    // Measures
    MeasureList,
    handleMeasureCheckboxChange,
    // Categories
    CategoryList,
    handleCategoryCheckboxChange,
    // Price
    MinPrice,
    MaxPrice,
    handlePriceRangeChange,
    // Discount
    handleDiscountCheckboxChange,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductContextComponent;
