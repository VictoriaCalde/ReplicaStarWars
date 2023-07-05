import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imagen1 from "../components/imagenes/image_15dae74c.jpeg";
import imagen2 from "../components/imagenes/image_802cdb9b.jpeg";
import imagen3 from "../components/imagenes/image_72f8ff1b.jpeg";
import imagen4 from "../components/imagenes/image_a9bcb52f.jpeg";
import imagen5 from "../components/imagenes/kay_nd5_wide_thumbnail_7ac38cfb.jpeg";
import imagen6 from "../components/imagenes/image_9c63d62b.jpeg";
import imagen7 from "../components/imagenes/image_0abee5f2.jpeg";
import imagen8 from "../components/imagenes/image_dab64477.jpeg";
import "./Carousel4.css";

const Carousel4 = () => {
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
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/this-or-hat-indiana-jones-101-and-more"
            className="entity-link title-link show-details"
            data-title="Beat the Tatooine Heat with StarWars.com’s Summer Viewing Guide"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> This or Hat, Indiana Jones 101, and More! </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen2,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/harrison-ford-reflects-on-playing-indiana-jones-new-adventures-come-to-the-disney-parks-and-more"
            className="entity-link title-link show-details"
            data-title="Harrison Ford Reflects on Playing Indiana Jones, New Adventures Come to the Disney Parks, and More!"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Harrison Ford Reflects on Playing Indiana Jones, New Adventures Come to the Disney Parks, and More!
              </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen3,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/the-mandalorian-disney-gallery"
            className="entity-link title-link show-details"
            data-title="The Mandalorian | Disney Gallery"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> The Mandalorian | Disney Gallery </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen4,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/indiana-jones-is-back-in-action-john-williams-performs-and-more"
            className="entity-link title-link show-details"
            data-title="Indiana Jones is Back in Action, John Williams Performs, and More!"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> Indiana Jones is Back in Action, John Williams Performs, and More! </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen5,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/official-gameplay-walkthrough-star-wars-outlaws"
            className="entity-link title-link show-details"
            data-title="Official Gameplay Walkthrough | Star Wars Outlaws"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> Official Gameplay Walkthrough | Star Wars Outlaws </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen6,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/world-premiere-trailer-star-wars-outlaws"
            className="entity-link title-link show-details"
            data-title="World Premiere Trailer | Star Wars Outlaws"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> World Premiere Trailer | Star Wars Outlaws </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen7,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/ahsoka-release-date-announced-hayden-christensen-and-diego-luna-chat-and-more"
            className="entity-link title-link show-details"
            data-title="Ahsoka Release Date Announced, Hayden Christensen and Diego Luna Chat, and More!"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Ahsoka Release Date Announced, Hayden Christensen and Diego Luna Chat, and More!
              </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen8,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/video/begin-ahsoka"
            className="entity-link title-link show-details"
            data-title="“Begin” | Ahsoka"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span> "Begin" | Ahsoka </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
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
              <span>Latest Video</span>
            </h2>
          </div>
          <div className="view-all-container">
            <a className="see-all-link" href="https://www.starwars.com/video">
              View All
            </a>
          </div>
        </div>
        <div className="header-line"></div>
      </div>

      <Carousel responsive={responsive} infinite>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image.src}
              alt={`Imagen ${index + 1}`}
              className="carousel-image"
            />
            {image.details && (
              <div className="entity-details">
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

export default Carousel4;