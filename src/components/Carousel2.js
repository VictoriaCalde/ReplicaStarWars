import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import imagen1 from "../components/imagenes/ahsoka-tentpolehero-mobile_32bf23fd.jpeg";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
        >
          <div>
            <img src={imagen1} alt="Imagen 1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
