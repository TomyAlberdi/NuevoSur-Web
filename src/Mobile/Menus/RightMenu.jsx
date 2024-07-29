import React, { useContext } from "react";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";
import { IoCloseCircle } from "react-icons/io5";

const RightMenu = () => {
  const { RightMenuOpen, handleRightMenuOpen } = useContext(MobileMenuContext);

  return (
    <div className={"MobileMenu RightMenu" + (RightMenuOpen ? " open" : "")}>
      <section className="header">
        <img src="/NuevoSurIcon.png" onClick={handleRightMenuOpen} />
        Usuario
        <div onClick={handleRightMenuOpen}>
          <IoCloseCircle />
        </div>
      </section>
      <section className="body">right</section>
    </div>
  );
};

export default RightMenu;
