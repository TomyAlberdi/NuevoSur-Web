import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";

const FilterCategory = () => {
  const { handleCategoryCheckboxChange, CategoryList } = useContext(ProductContext);

  const [Open, setOpen] = useState(true);

  return (
    <section
      className={"FilterContainer multipleFilter" + (Open ? " open" : "")}
    >
      <div className="filterMenu" onClick={() => setOpen(!Open)}>
        <h4>Categoría</h4>
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
        {CategoryList?.map((category) => (
          <label
            key={category.id}
            className={CategoryList[category.id].Checked ? "checked" : ""}
          >
            <input
              id={`CategoryFilter${category.id}`}
              type="checkbox"
              className="checkbox"
              name="CategoryFilter"
              checked={category.Checked}
              onChange={() => handleCategoryCheckboxChange(category.id)}
            />
            <span className="name">{category.Category}</span>
            <span className="quantity">{category.Quantity}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default FilterCategory;
