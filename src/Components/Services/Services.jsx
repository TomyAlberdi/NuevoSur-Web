import React from "react";
import { FaPhone, FaQuestion } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

const Services = () => {
  return (
    <div className="Services">
      <article>
        <a href="/faq">
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
        <a href="/contact">
          <span>
            <FaPhone />
          </span>
          Contacto
        </a>
      </article>
    </div>
  );
};

export default Services;
