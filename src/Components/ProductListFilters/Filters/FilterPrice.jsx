import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import ReactSlider from "react-slider";

const FilterPrice = () => {
  const { MinPrice, MaxPrice, handlePriceRangeChange } = useContext(ProductContext);

  const [Open, setOpen] = useState(true);

  return (
    <section className={"FilterContainer" + (Open ? " open" : "")}>
      <div className="filterMenu" onClick={() => setOpen(!Open)}>
        <h4>Precio</h4>
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
      <div className="filters price">
        {(MinPrice && MaxPrice) > 0 ? ( 
          <ReactSlider
            className="slider_component"
            thumbClassName="thumb"
            trackClassName="track"
            defaultValue={[MinPrice, MaxPrice]}
            min={MinPrice}
            max={MaxPrice}
            onAfterChange={(value) => {
              handlePriceRangeChange(value);
            }}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
          />
        ) : null}
      </div>
    </section>
  );
};

export default FilterPrice;
