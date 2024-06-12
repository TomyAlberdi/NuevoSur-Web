import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";

const FilterProvider = () => {
  const { handleProviderCheckboxChange, ProviderList } =
    useContext(ProductContext);

  const [Open, setOpen] = useState(true);

  return (
    <section
      className={"FilterContainer multipleFilter" + (Open ? " open" : "")}
    >
      <div className="filterMenu" onClick={() => setOpen(!Open)}>
        <h4>Proveedor</h4>
        {Open === true ? (
          <span className="btn-open">
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
          <span className="btn-close">
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
        {ProviderList?.map((provider) => (
          <label
            key={provider.id}
            className={ProviderList[provider.id].Checked ? "checked" : ""}
          >
            <input
              id={`ProviderFilter${provider.id}`}
              type="checkbox"
              className="checkbox"
              name="ProviderFilter"
              checked={provider.Checked}
              onChange={() => handleProviderCheckboxChange(provider.id)}
            />
            <span className="name">{provider.Provider}</span>
            <span className="quantity">{provider.Quantity}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default FilterProvider;
