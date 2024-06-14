import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/Hooks/ProductContextComponent";

const FilterDiscount = () => {
  const { handleDiscountCheckboxChange } = useContext(ProductContext);

  const [Checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!Checked);
    handleDiscountCheckboxChange(!Checked);
  };

  return (
    <section className={"FilterContainer"}>
      <div className={"filterMenu discount" + (Checked ? " checked" : "")}>
        <h4>Con descuento</h4>
        <input
          type="checkbox"
          className="checkbox"
          name="DiscountFilter"
          checked={Checked}
          onChange={handleCheck}
        />
      </div>
    </section>
  );
};

export default FilterDiscount;
