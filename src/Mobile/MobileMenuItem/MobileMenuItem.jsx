import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";

const MobileMenuItem = ({ data }) => {
  const { handleLeftMenuOpen } = useContext(MobileMenuContext);

  const navigate = useNavigate();

  const [ShowSubcategories, setShowSubcategories] = useState(false);

  return (
    <article
      onClick={() => {
        {
          if (data.subcategories === null) {
            navigate(`/search/${data.category}`);
            handleLeftMenuOpen();
          } else {
            setShowSubcategories(!ShowSubcategories);
          }
        }
      }}
      className={ShowSubcategories ? "active" : ""}
    >
      <span>
        {data.category}
        {data.subcategories ? (
          <svg
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={ShowSubcategories ? "active" : ""}
          >
            <path
              d="M1.5 1L5.5 5L9.5 1"
              stroke="#000000"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      {data.subcategories && ShowSubcategories ? (
        <ul className="subcategories">
          {data.subcategories?.map((subcategory) => (
            <li
              onClick={(e) => {
                handleLeftMenuOpen();
                navigate(`/search/${subcategory}`);
                e.stopPropagation();
              }}
            >
              {subcategory}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};

export default MobileMenuItem;
