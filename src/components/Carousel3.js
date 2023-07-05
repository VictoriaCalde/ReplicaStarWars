import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imagen1 from "../components/imagenes/star-wars-summer-viewing-guide-_article-feature_f8bc71df.jpeg";
import imagen2 from "../components/imagenes/sw-visions-aaus-song-interview-daniel-nadia-sashdouble-_e6ada762.jpeg";
import imagen3 from "../components/imagenes/high-republic-adventures-featured_9a4ae723.jpeg";
import imagen4 from "../components/imagenes/swce23-online-store-featured-all_f399cba3.jpeg";
import imagen5 from "../components/imagenes/marvel-september-solicits_article-feature_85adaac1.jpeg";
import imagen6 from "../components/imagenes/marvel-obi-wan-kenobi-series-comic-reveal_article-featu_954e6782.jpeg";
import imagen7 from "../components/imagenes/star-wars-insider-219-article-feature_8a550828.jpeg";
import imagen8 from "../components/imagenes/fan-spotlight-father-son-galaxy_840013ac.jpeg";
import imagen9 from "../components/imagenes/marvel-the-mandalorian-season-2-issue-1_article-feature_5342792e.jpeg";
import "./LastCarousels.css";

const CarouselComponent = () => {
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
            href="https://www.starwars.com/news/star-wars-summer-viewing-guide"
            className="entity-link title-link show-details"
            data-title="Beat the Tatooine Heat with StarWars.com’s Summer Viewing Guide"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Beat the Tatooine Heat with StarWars.com’s Summer Viewing Guide
              </span>
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
            href="https://www.starwars.com/news/star-wars-visions-aaus-song-interview"
            className="entity-link title-link show-details"
            data-title="Meet the Visionaries: Nadia Darries and Daniel Clarke on the Celebration of Nature and Family in “Aau’s Song”"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Meet the Visionaries: Nadia Darries and Daniel Clarke on the
                Celebration of Nature and Family in “Aau’s Song”
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
            href="https://www.starwars.com/news/star-wars-the-high-republic-adventures-interview"
            className="entity-link title-link show-details"
            data-title="Star Wars: The High Republic Adventures Comes to an End - Exclusive Preview"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Star Wars: The High Republic Adventures Comes to an End -
                Exclusive Preview
              </span>
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
            href="https://www.starwars.com/news/swce-2023-merchandise"
            className="entity-link title-link show-details"
            data-title="Star Wars Celebration Europe 2023 Online Store Now Open"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Star Wars Celebration Europe 2023 Online Store Now Open
              </span>
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
            href="https://www.starwars.com/news/marvel-star-wars-september-2023-preview"
            className="entity-link title-link show-details"
            data-title="Uncover the Dark Droids Crossover Event in Marvel’s September 2023 Star Wars Comics – Exclusive Preview"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Uncover the Dark Droids Crossover Event in Marvel’s September
                2023 Star Wars Comics – Exclusive Preview
              </span>
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
            href="https://www.starwars.com/news/marvel-star-wars-obi-wan-kenobi"
            className="entity-link title-link show-details"
            data-title="Marvel Will Bring the Obi-Wan Kenobi Disney+ Series to Comics - Exclusive Reveal"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Marvel Will Bring the Obi-Wan Kenobi Disney+ Series to Comics -
                Exclusive Reveal
              </span>
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
            href="https://www.starwars.com/news/star-wars-insider-219-excerpt"
            className="entity-link title-link show-details"
            data-title="From the Pages of Star Wars Insider: Behind the Scenes of The Bad Batch"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                From the Pages of Star Wars Insider: Behind the Scenes of The
                Bad Batch
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
            href="https://www.starwars.com/news/fan-spotlight-father-son-galaxy"
            className="entity-link title-link show-details"
            data-title="StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like His Father, Kerwin, Before Him"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                StarWars.com Fan Spotlight: Keith Yarde Is a Star Wars Fan Like
                His Father, Kerwin, Before Him
              </span>
            </h3>
          </a>
          <div className="notch-contain"></div>
        </div>
      ),
    },
    {
      src: imagen9,
      details: (
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <a
            href="https://www.starwars.com/news/marvel-the-mandalorian-season-2-issue-1"
            className="entity-link title-link show-details"
            data-title="Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with a Brawl — Exclusive Preview"
            tabIndex="-1"
          >
            <h3 className="title no_focus">
              <span>
                Marvel’s Star Wars: The Mandalorian – Season 2 #1 Kicks Off with
                a Brawl — Exclusive Preview
              </span>
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
              <span>Latest News + Features</span>
            </h2>
          </div>
          <div className="view-all-container">
            <a className="see-all-link" href="https://www.starwars.com/news">
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

export default CarouselComponent;
