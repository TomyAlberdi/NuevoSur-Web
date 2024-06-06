import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="Home">
      <section className="carousel">
        <swiper-container
          slidesPerView={1}
          autoplay={true}
          pagination={{ clickable: true }}
          speed={1000}
          loop={true}
        >
          <swiper-slide>
            <Link>Promo 1</Link>
          </swiper-slide>
          <swiper-slide>
            <Link>Promo 2</Link>
          </swiper-slide>
          <swiper-slide>
            <Link>Promo 3</Link>
          </swiper-slide>
          <swiper-slide>
            <Link>Promo 4</Link>
          </swiper-slide>      
        </swiper-container>
      </section>
    </div>
  );
};

export default Home;
