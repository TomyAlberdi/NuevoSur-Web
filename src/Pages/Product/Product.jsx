import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import data from "@/Utils/productList.json";

const Product = () => {
  const { id } = useParams();

  const [Product, setProduct] = useState(null);
  useEffect(() => {
    const product = data.find((x) => x.id === Number(id));
    setProduct(product);
  }, [id]);

  return (
    <div className="Product">
      <section className="div1 mainInfo">
        <div className="portion">
          <span className="category">{Product?.category}</span>
          <span className="name">{Product?.name}</span>
          <span className="provider">{Product?.provider}</span>
          <span className="description">{Product?.description}</span>
        </div>
        <div className="extraInfo portion">
          <section className="measures">
            <span className="title">Medidas:</span>
            <span className="data">{Product?.measures}</span>
          </section>
          <section className="quality_code">
            <div className="quality">
              <span className="title">Calidad:</span>
              <span className="data">{Product?.quality}</span>
            </div>
            <div className="code">
              <span className="title">Código:</span>
              <span className="data">{Product?.code}</span>
            </div>
          </section>
        </div>
      </section>

      <section className="div2 carousel portion">
        <swiper-container
          slidesPerView={1}
          autoplay={true}
          pagination="true"
          speed={1000}
        >
          {Product?.images.map((image, index) => (
            <swiper-slide key={index}>
              <img src={image} />
            </swiper-slide>
          ))}
        </swiper-container>
      </section>

      <section className="div4 prices portion">
        <span className="price">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(Product?.price)}{" "}
          X {Product?.priceUnit}
        </span>
        <span className="salesUnit">
          <span>Unidad de venta:</span>
          {Product?.salesUnit}
        </span>
      </section>

      <section className="div5 actions portion">actions</section>
    </div>
  );
};

export default Product;
