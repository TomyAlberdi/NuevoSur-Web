import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";
import $ from "jquery";

const FilterPrice = () => {
  const { MinPrice, MaxPrice } = useContext(ProductContext);

  const [Open, setOpen] = useState(true);
  const [Range, setRange] = useState({
    min: MinPrice,
    max: MaxPrice,
  });

  useEffect(() => {
    $(".js-range-slider").ionRangeSlider({
      min: Range.min,
      max: Range.max,
      from: Range.min,
      to: Range.max,
      type: "double",
      hideLimitLabels: true,
      hidePointerLabels: true,
      prefix: "$",
      postfix: "",
      keyboard: true,
      grid: true,
      grid_num: 10,
      grid_snap: true,
      force_edges: true,
      drag_interval: true,
      drag_min_value: true,
      drag_max_value: true,
      values: [Range.min, Range.max],
      onStart: function (data) {
        setRange({
          min: data.from,
          max: data.to,
        });
      },
      onEnd: function (data) {
        setRange({
          min: data.from,
          max: data.to,
        });
      },
      onSlide: function (data) {
        setRange({
          min: data.from,
          max: data.to,
        });
        console.log(data);
      },
    });
  }, [Range]);

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
        <span>{MinPrice ? MinPrice : "0"}</span>
        {/* 
        https://www.npmjs.com/package/ion-rangeslider
        http://ionden.com/a/plugins/ion.rangeSlider/start.html
        */}
        <input
          type="text"
          className="js-range-slider"
          name="my_range"
          value=""
        />
        <span>{MaxPrice ? MaxPrice : "0"}</span>
      </div>
    </section>
  );
};

export default FilterPrice;
