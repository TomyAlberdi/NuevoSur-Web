import { createContext, useEffect, useState } from "react";
import importData from "@/Utils/productList.json";

export const ProductContext = createContext();

const ProductContextComponent = ({ children }) => {
  const BASE_URL = "http://localhost:8080";

  // PRODUCTS & PAGINFO //////////////////////////////////////////////////////////////////
  const [Data, setData] = useState([]);

  const [PagInfo, setPagInfo] = useState([]);

  useEffect(() => {
    getProviders();
    getMeasures();
    getCategories();
    getMinMaxPrice();
  }, [Data]);

  useEffect(() => {
    let getProductsUrl = `${BASE_URL}/product/list?size=9&page=0`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        const { content, ...info } = data;
        setData(data.content);
        setFilteredData(content);
        setPagInfo(info);
      })
      .catch((err) => console.error(err));
  }, []);

  const paginationRight = () => {
    if (PagInfo.number === PagInfo.totalPages - 1) return;
    let getProductsUrl = `${BASE_URL}/product/list?size=9&page=${
      PagInfo.number + 1
    }`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        const { content, ...info } = data;
        setData(data.content);
        setFilteredData(content);
        setPagInfo(info);
      })
      .catch((err) => console.error(err));
  };

  const paginationLeft = () => {
    if (PagInfo.number === 0) return;
    let getProductsUrl = `${BASE_URL}/product/list?size=9&page=${
      PagInfo.number - 1
    }`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        const { content, ...info } = data;
        setData(data.content);
        setFilteredData(content);
        setPagInfo(info);
      })
      .catch((err) => console.error(err));
  };

  const paginationNumbered = (num) => {
    if (num > PagInfo.totalPages || num < 0) return;
    let getProductsUrl = `${BASE_URL}/product/list?size=9&page=${num}`;
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((data) => {
        const { content, ...info } = data;
        setData(data.content);
        setFilteredData(content);
        setPagInfo(info);
      })
      .catch((err) => console.error(err));
  };

  // CATEGORIES //////////////////////////////////////////////////////////////////
  const [CategoryList, setCategoryList] = useState([]);

  const getCategories = () => {
    const url = `${BASE_URL}/category/list`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(
          data.map((category, index) => ({
            id: index,
            categoryId: category.id,
            Category: category.name,
            Quantity: category.products,
            Checked: false,
          }))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleCategoryCheckboxChange = (id) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "categoryId"
    );

    const updatedItems = CategoryList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "categoryId", value: item.categoryId });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setCategoryList(updatedItems);
  };

  // PROVIDERS //////////////////////////////////////////////////////////////////
  const [ProviderList, setProviderList] = useState([]);

  const getProviders = () => {
    const url = `${BASE_URL}/provider/list`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProviderList(
          data.map((provider, index) => ({
            id: index,
            providerId: provider.id,
            Provider: provider.name,
            Quantity: provider.products,
            Checked: false,
          }))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleProviderCheckboxChange = (id) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "providerId"
    );

    const updatedItems = ProviderList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "providerId", value: item.providerId });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setProviderList(updatedItems);
  };

  // MEASURES //////////////////////////////////////////////////////////////////
  const [MeasureList, setMeasureList] = useState([]);

  const getMeasures = () => {
    const url = `${BASE_URL}/product/measures`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeasureList(
          data.map((measure, index) => ({
            id: index,
            Measures: measure.measure,
            Quantity: measure.products,
            Checked: false,
          }))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleMeasureCheckboxChange = (id) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "measure"
    );

    const updatedItems = MeasureList.map((item) => {
      if (item.id === id) {
        const newChecked = !item.Checked;
        if (newChecked) {
          newAppliedFilters.push({ type: "measure", value: item.Measures });
        }
        return { ...item, Checked: newChecked };
      }
      return { ...item, Checked: false };
    });

    setAppliedFilters(newAppliedFilters);
    setMeasureList(updatedItems);
  };

  // PRICE //////////////////////////////////////////////////////////////////////

  const [MinPrice, setMinPrice] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(0);

  const getMinMaxPrice = () => {
    const url = `${BASE_URL}/product/prices`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMinPrice(data.minPrice);
        setMaxPrice(data.maxPrice);
      })
      .catch((err) => console.error(err));
  };

  const handlePriceRangeChange = (range) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "minPrice" && filter.type !== "maxPrice"
    );

    newAppliedFilters.push({ type: "minPrice", value: range[0] });
    newAppliedFilters.push({ type: "maxPrice", value: range[1] });

    setAppliedFilters(newAppliedFilters);
  };

  // DISCOUNT ///////////////////////////////////////////////////////////////////

  const handleDiscountCheckboxChange = (checked) => {
    let newAppliedFilters = AppliedFilters.filter(
      (filter) => filter.type !== "discount"
    );

    if (checked) {
      newAppliedFilters.push({ type: "discount", value: true });
    }

    setAppliedFilters(newAppliedFilters);
  };

  // FILTER LOGIC ///////////////////////////////////////////////////////////////

  const [FilteredData, setFilteredData] = useState([]);
  const [AppliedFilters, setAppliedFilters] = useState([]);

  const resetData = () => {
    setFilteredData(Data);
  };

  const filterData = (appliedFilters) => {
    let filterURL = `${BASE_URL}/product/filterList?size=9&page=0`;

    appliedFilters.forEach((filter) => {
      filterURL = `${filterURL}&${filter.type}=${filter.value}`;
    });
    console.log(filterURL);
    return filterURL;
  };

  useEffect(() => {
    let filterURL = filterData(AppliedFilters);
    fetch(filterURL)
      .then((res) => res.json())
      .then((data) => {
        const { content, ...info } = data;
        setFilteredData(content);
        setPagInfo(info);
      })
      .catch((err) => console.error(err));
  }, [AppliedFilters]);

  // SEARCH LOGIC //////////////////////////////////////////////////////////////

  const handleSearch = (query) => {
    let filteredData = [];
    if (query.length > 0) {
      filteredData = Data?.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.provider.toLowerCase().includes(query.toLowerCase()) ||
          item.measures.toLowerCase().includes(query.toLowerCase()) ||
          item.price.toString().includes(query.toString()) ||
          item.discount?.newPrice?.toString().includes(query.toString()) ||
          (item.tags &&
            item.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            ))
        );
      });
    }
    return filteredData;
  };

  const data = {
    Data,
    FilteredData,
    resetData,
    BASE_URL,
    PagInfo,
    paginationRight,
    paginationLeft,
    paginationNumbered,
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
    // Search
    handleSearch,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductContextComponent;
