import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="contactHeader">
        <h1>Contáctenos</h1>
      </div>
      <div className="contactBody">
        <article>
          <div>
            <IoLocationSharp />
          </div>
          Dirección
        </article>
        <article>
          <div>
            <FaPhone />
          </div>
          Teléfono
        </article>
        <article>
          <div>
            <MdEmail />
          </div>
          Email
        </article>
      </div>
      <div className="infoBody">
        <h2>Sobre nosotros</h2>
        <article>
          <div className="header">
            ¿Quiénes somos?
          </div>
          <div className="body">
            Info texto
          </div>
        </article>
        <article>
          <div className="header">
            ¿Qué hacemos?
          </div>
          <div className="body">
            Info texto
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact