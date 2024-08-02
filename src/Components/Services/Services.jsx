import React from "react";
import { FaPhone, FaQuestion } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="Services">
      <article>
        <Link to={"/faq"}>
          <span>
            <FaQuestion />
          </span>
          Preguntas frecuentes
        </Link>
      </article>
      <article>
        <Link to="/list">
          <span>
            <FaBoxOpen />
          </span>
          Productos
        </Link>
      </article>
      <article>
        <Link to="/contact">
          <span>
            <FaPhone />
          </span>
          Contacto
        </Link>
      </article>
    </div>
  );
};

export default Services;
