import React, { useContext } from "react";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";
import { IoCloseCircle } from "react-icons/io5";

const LeftMenu = () => {
  const { LeftMenuOpen, handleLeftMenuOpen } = useContext(MobileMenuContext);

  return (
    <div className={"MobileMenu LeftMenu" + (LeftMenuOpen ? " open" : "")}>
      <section className="header">
        <div onClick={handleLeftMenuOpen}>
          <IoCloseCircle />
        </div>
        Menú
        <img src="/NuevoSurIcon.png" onClick={handleLeftMenuOpen} />
      </section>
      <section className="body">left</section>
    </div>
  );
};

export default LeftMenu;
