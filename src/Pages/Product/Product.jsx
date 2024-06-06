import React from "react";
import { useParams } from "react-router-dom";
import "swiper/css";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="Product">
      <section className="div1">div1</section>
      <section className="div2">div2</section>
      <section className="div3">div3</section>
      <section className="div4">div4</section>
      <section className="div5">div5</section>
      <section className="div6">div6</section>
      <section className="div7">div7</section>
      <section className="div8">div8</section>
      <section className="div9">div9</section>
      <section className="div10">div10</section>
      <section className="div11">div11</section>
      <section className="div12">div12</section>
      <section className="div13">div13</section>
    </div>
  );
};

export default Product;
