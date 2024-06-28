import React from "react";
import { Link } from "react-router-dom";
import data from "@/Utils/catNavbar.json";
import BotNavbarItem from "@/Components/Navbar/components/BotNavbarItem";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.search_prompt.value.length > 0) {
      navigate(`/search/${e.target.search_prompt.value}`);
    }
    document.getElementById("search_prompt").value = "";
  };

  return (
    <div className="Navbar">
      <div className="topNavbar">
        <section className="presentation">
          <Link to={"/"}>
            <img src="/NuevoSurIcon.png" />
            <h2>
              <span>Nuevo Sur</span> <span>Cerámicos</span>
            </h2>
          </Link>
        </section>
        <form className="searchBar" onSubmit={handleSearch}>
          <input
            type="text"
            id="search_prompt"
            name="search_prompt"
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
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.4238 21.9248L28.4989 27.9999"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="botNavbar">
        {
          data.map((item, index) => (
            <BotNavbarItem data={item} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
