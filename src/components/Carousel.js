import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import imagen1 from "../components/imagenes/sw-outlaws-sashsingle-hero-mobile_5d63ad7b.jpeg";
import imagen2 from "../components/imagenes/indy5-premiere-hero-mobile_da5024e3.jpeg";
import imagen3 from "../components/imagenes/obi-wan-marvelsashsingle-hero-mobile_e5a5e30e.jpeg";
import imagen4 from "../components/imagenes/disney-gallery-the-mandalorian-s3-module-hero-mobile_9a444259.jpeg";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={8000}
          stopOnHover={false}
        >
          <div>
            <img src={imagen1} alt="Imagen 1" />
            <div className="carousel-overlay">
          <button className="carousel-button">WACH NOW</button>
        </div>
          </div>
          
          <div>
            <img src={imagen2} alt="Imagen 2" />
          </div>
          <div>
            <img src={imagen3} alt="Imagen 3" />
          </div>
          <div>
            <img src={imagen4} alt="Imagen 4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
