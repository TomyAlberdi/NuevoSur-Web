import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="topFooter">
        <div>
          <img src="/NuevoSurIcon.png" />
          <span>Nuevo Sur Cerámicos</span>
        </div>
        <div>
          <a href="" target="_blank">
            <GrFacebookOption />
          </a>
          <a href="" target="_blank">
            <BiLogoInstagramAlt />
          </a>
        </div>
      </section>
      <section className="botFooter">
        <p>
          Copyright 2024 - Nuevo Sur SA. Todos los derechos reservados.
        </p>
        <p>NuevoSur@gmail.com</p>
      </section>
    </footer>
  );
};

export default Footer;
