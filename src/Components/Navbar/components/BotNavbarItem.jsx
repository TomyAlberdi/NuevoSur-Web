import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BotNavbarItem = ({ data }) => {
  const navigate = useNavigate();

  const [showSubcategories, setShowSubcategories] = useState(false);

  const [FadeAnimation, setFadeAnimation] = useState(false);

  const handleOnMouseOut = () => {
    setFadeAnimation(true);
    setTimeout(() => {
      setShowSubcategories(false);
      setFadeAnimation(false);
    }, 300);
  };

  return (
    <article
      className="botNavbarItem"
      onMouseEnter={() => setShowSubcategories(true)}
      onMouseLeave={handleOnMouseOut}
      onClick={() => navigate(`/search/${data.category}`)}
    >
      <Link>
        {data.category}
        {data.subcategories ? (
          <svg
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
      </Link>
      <div className={"subcategories " + (FadeAnimation ? "fade" : "")}>
        {showSubcategories &&
          data.subcategories?.map((subcategory, index) => (
            <Link
              key={index}
              to={`/search/${subcategory}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {subcategory}
            </Link>
          ))}
      </div>
    </article>
  );
};

export default BotNavbarItem;
