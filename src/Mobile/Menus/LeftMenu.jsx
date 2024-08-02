import React, { useContext } from "react";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";
import { IoCloseCircle } from "react-icons/io5";
import { FaPhone, FaQuestion } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "@/Utils/catNavbar.json";
import MobileMenuItem from "@/Mobile/MobileMenuItem/MobileMenuItem";

const LeftMenu = () => {
  const { LeftMenuOpen, handleLeftMenuOpen } = useContext(MobileMenuContext);

  return (
    <div className={"MobileMenu LeftMenu" + (LeftMenuOpen ? " open" : "")}>
      <section className="header">
        <div onClick={handleLeftMenuOpen}>
          <IoCloseCircle />
        </div>
        <p className="bebas">Menú</p>
        <img src="/NuevoSurIcon.png" onClick={handleLeftMenuOpen} />
      </section>
      <section className="body">
        <section className="topMenu">
          <Link to={"/faq"} onClick={handleLeftMenuOpen}>
            <span>
              <FaQuestion />
            </span>
            Preguntas frecuentes
          </Link>
          <Link to="/list" onClick={handleLeftMenuOpen}>
            <span>
              <FaBoxOpen />
            </span>
            Productos
          </Link>
          <Link to="/contact" onClick={handleLeftMenuOpen}>
            <span>
              <FaPhone />
            </span>
            Contacto
          </Link>
        </section>
        <section className="botMenu">
          {
            data.map((item, index) => (
              <MobileMenuItem data={item} key={index} />
            ))
          }
        </section>
      </section>
    </div>
  );
};

export default LeftMenu;
