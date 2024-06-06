import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import TopProducts from "@/Components/TopProducts/TopProducts";
import Services from "@/Components/Services/Services";

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
            <Link
              style={{
                backgroundImage: `url(https://s3-sa-east-1.amazonaws.com/lpc-maxis/wp-content/uploads/2024/04/29125518/WhatsApp-Image-2024-05-22-at-12.33.25-PM.jpeg)`,
              }}
            ></Link>
          </swiper-slide>
          <swiper-slide>
            <Link
              style={{
                backgroundImage: `url(https://s3-sa-east-1.amazonaws.com/lpc-maxis/wp-content/uploads/2024/04/29130220/WhatsApp-Image-2024-05-22-at-11.50.02-AM.jpeg`,
              }}
            ></Link>
          </swiper-slide>
          <swiper-slide>
            <Link
              style={{
                backgroundImage: `url(https://s3-sa-east-1.amazonaws.com/lpc-maxis/wp-content/uploads/2024/04/29125801/WhatsApp-Image-2024-05-22-at-11.48.51-AM.jpeg`,
              }}
            ></Link>
          </swiper-slide>
          <swiper-slide>
            <Link
              style={{
                backgroundImage: `url(https://s3-sa-east-1.amazonaws.com/lpc-maxis/wp-content/uploads/2024/01/03135348/Banner-FEBRERO_Desktop-Santander-3-cuotas.png`,
              }}
            ></Link>
          </swiper-slide>
        </swiper-container>
      </section>
      <Services />
      <TopProducts />
    </div>
  );
};

export default Home;
