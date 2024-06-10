import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";

const FilterCategory = () => {
  const { FilteredData, filterByCategory, resetData } =
    useContext(ProductContext);

  const [Open, setOpen] = useState(true);
  const [FilterApplied, setFilterApplied] = useState(false);

  const [CheckedCeramicos, setCheckedCeramicos] = useState(false);
  const [CheckedPorcelanicos, setCheckedPorcelanicos] = useState(false);

  const handleCheck = (name, state, setState) => {
    setCheckedCeramicos(false);
    setCheckedPorcelanicos(false);
    if (state) {
      setState(false);
      setFilterApplied(false);
      resetData();
    } else {
      setState(true);
      setFilterApplied(true);
      filterByCategory(name);
    }
  };

  return (
    <section
      className={"FilterContainer multipleFilter" + (Open ? " open" : "")}
    >
      <div className="filterMenu">
        <h4>Categoría</h4>
        {Open === true ? (
          <span onClick={() => setOpen(!Open)} className="btn-open">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 15L12 7.5L4.5 15"
                stroke="#001D2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <span onClick={() => setOpen(!Open)} className="btn-close">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 15L12 7.5L4.5 15"
                stroke="#001D2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            name="CeramicosFilter"
            checked={CheckedCeramicos}
            onChange={() =>
              handleCheck(
                "CeramicosFilter",
                CheckedCeramicos,
                setCheckedCeramicos
              )
            }
          />
          Cerámicos
          <span>
            {
              FilteredData?.reduce(
                (acc, product) => product.category === "CERAMICOS" ? acc + 1 : acc,
                0
              )
            }
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            name="PorcelanicosFilter"
            checked={CheckedPorcelanicos}
            onChange={() =>
              handleCheck(
                "PorcelanicosFilter",
                CheckedPorcelanicos,
                setCheckedPorcelanicos
              )
            }
          />
          Porcelánicos
          <span>
            {
              FilteredData?.reduce(
                (acc, product) => product.category === "PORCELANICOS" ? acc + 1 : acc,
                0
              )
            }
          </span>
        </label>
      </div>
    </section>
  );
};

export default FilterCategory;
