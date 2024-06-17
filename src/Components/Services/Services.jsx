import React from "react";
import { FaPhone, FaQuestion } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";

const Services = () => {
  return (
    <div className="Services">
      <article>
        <a href="/preguntas-frecuentes">
          <span>
            <FaQuestion />
          </span>
          Preguntas frecuentes
        </a>
      </article>
      <article>
        <a href="/list">
          <span>
            <MdLocalGroceryStore />
          </span>
          Productos
        </a>
      </article>
      <article>
        <a href="">
          <span>
            <FaPhone />
          </span>
          Contacto
        </a>
      </article>
      <article>
        <a href="">
          <span>
            <IoLocationSharp />
          </span>
          Sucursales
        </a>
      </article>
    </div>
  );
};

export default Services;
