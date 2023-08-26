import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imagen1 from "../components/imagenes/bobf-franchise-slider_efe95678.jpeg";
import imagen2 from "../components/imagenes/0630-featured-primary-1164x647_e1bd3c53.jpeg";
import imagen3 from "../components/imagenes/thr-franchise-slider_6d73dcd2.jpeg";
import imagen4 from "../components/imagenes/franchise-slider-swce23_5c8c2aed.jpeg";
import imagen5 from "../components/imagenes/bottom-slider-logos_5d5563d4.jpeg";
import imagen6 from "../components/imagenes/ffc-bottom-slider_6666c49b.jpeg";
import "./LastCarousels.css";

const Carousel5 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Número de imágenes que se pasan a la vez
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // Número de imágenes que se pasan a la vez
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Número de imágenes que se pasan a la vez
    },
  };

  const images = [
    {
      src: imagen1,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/disneyplus"
            className="entity-link title-link show-details"
            data-title="Beat the Tatooine Heat with StarWars.com’s Summer Viewing Guide"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
    {
      src: imagen2,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.lucasfilm.com/productions/indiana-jones-and-the-dial-of-destiny/"
            className="entity-link title-link show-details"
            data-title="Harrison Ford Reflects on Playing Indiana Jones, New Adventures Come to the Disney Parks, and More!"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
    {
      src: imagen3,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/the-high-republic"
            className="entity-link title-link show-details"
            data-title="The Mandalorian | Disney Gallery"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
    {
      src: imagen4,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/star-wars-celebration"
            className="entity-link title-link show-details"
            data-title="Indiana Jones is Back in Action, John Williams Performs, and More!"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
    {
      src: imagen5,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/interactive/virtual-reality"
            className="entity-link title-link show-details"
            data-title="Official Gameplay Walkthrough | Star Wars Outlaws"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
    {
      src: imagen6,
      details: (
        <div className="entity-details5 text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/force-for-change"
            className="entity-link title-link show-details"
            data-title="World Premiere Trailer | Star Wars Outlaws"
            tabIndex="-1"
          >
            <div className="notch-contain5"></div>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="carousel3-wrapper">
      <div className="carousel-header">
        <div className="title-container">
          <div className="title">
            <h2>
              <span>Explore More</span>
            </h2>
          </div>
        </div>
        <div className="header-line"></div>
      </div>

      <Carousel responsive={responsive} infinite>
        {images.map((image, index) => (
          <div key={index} className="carousel5-item">
            <img
              src={image.src}
              alt={`Imagen ${index + 1}`}
              className="carousel-image"
            />
            {image.details && (
              <div className="entity-details5">
                <div className="decal-contain">
                  <div className="decal"></div>
                </div>
                {image.details}
                <div className="notch-contain"></div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel5;
