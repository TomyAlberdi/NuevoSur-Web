import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";
import { FaUserTag } from "react-icons/fa";

const MobileNavbar = () => {
  const {
    LeftMenuOpen,
    RightMenuOpen,
    handleLeftMenuOpen,
    handleRightMenuOpen,
  } = useContext(MobileMenuContext);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.search_prompt_mobile.value.length > 0) {
      navigate(`/search/${e.target.search_prompt_mobile.value}`);
    }
    document.getElementById("search_prompt_mobile").value = "";
  };

  return (
    <div className="MobileNavbar">
      <div className="topNavbar">
        <section className="leftMenuButton" onClick={handleLeftMenuOpen}>
          <IoMenu />
        </section>
        <Link to="/">
          <img src="/NuevoSurIcon.png" />
        </Link>
        <section className="rightMenuButton" onClick={handleRightMenuOpen}>
          <FaUserTag />
        </section>
      </div>
      <form className="botNavbar" onSubmit={handleSearch}>
        <input
          type="text"
          id="search_prompt_mobile"
          name="search_prompt_mobile"
          placeholder="Buscar"
        />
        <button type="submit">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 25C20.799 25 25.5 20.299 25.5 14.5C25.5 8.70101 20.799 4 15 4C9.20101 4 4.5 8.70101 4.5 14.5C4.5 20.299 9.20101 25 15 25Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.4238 21.9248L28.4989 27.9999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MobileNavbar;
