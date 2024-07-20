import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

const ProductCard = ({ data }) => {

  const navigate = useNavigate();

  return (
    <article className="ProductCard" onClick={() => navigate(`/product/${data.id}`)}>
      {
        data.discountPercentage && (
          <section className="discountFlag">
            -
            {
              data.discountPercentage
            }
            %
          </section>
        )
      }
      <section
        className="div1 image"
        style={{ backgroundImage: `url(${data.image})` }}
      ></section>
      <section className="div2 price">
        {data.discountPercentage ? (
          <>
            <span className="oldPrice">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(data.price)}
            </span>
            <span className="newPrice">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(data.discountNewPrice)}{" "}
              X {data.priceUnit}
            </span>
          </>
        ) : (
          <span>
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(data.price)}{" "}
            X {data.priceUnit}
          </span>
        )}
      </section>
      <section className="div3 name">
        <span>{data.name}</span>
      </section>
      <section className="div4 unit">
        <span>{data.salesUnit}</span>
      </section>
      <section className="div5 button">
        <Link to={`/product/${data.id}`}>
          <FaSquarePlus /> Detalles
        </Link>
      </section>
    </article>
  );
};

export default ProductCard;
