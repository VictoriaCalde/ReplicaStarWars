import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import imagen1 from "../components/imagenes/sw-outlaws-sashsingle-hero-desktop_08d0cff1.jpeg";
import imagen2 from "../components/imagenes/423-twiij-slide-desktop_692b9498.jpg";
import imagen3 from "../components/imagenes/obi-wan-marvel-sashsingle-hero-desktop_6cd9c70f.jpeg";
import imagen4 from "../components/imagenes/disney-gallery-the-mandalorian-s3-module-hero-desktop_d6f7c4e1.jpeg";

const CarouselComponent = () => {
  return (
    <div className="carousel1-container" style={{ marginTop: "58px" }}>
      <div className="carousel-wrapper">
        <div className="carousel1-header">
          <div className="title1-container ">
            <div className="header1-line"></div>
            <span className="title1-text">
              ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
            </span>
          </div>
        </div>
        <Carousel
          showThumbs={true}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={8000}
          stopOnHover={false}
          showIndicators={false}
        >
          <div>
            <img src={imagen1} alt="Imagen 1" />
            <div className="carousel-overlay overlay-image1">
              <div className="content-details">
                <div className="content-title">
                  <h1>
                    <img
                      className="logo-title"
                      alt="Star Wars: Outlaws logo"
                      src="https://lumiere-a.akamaihd.net/v1/images/sw-outlaws-logo-white-desktop_c8550648.png?region=0,0,800,145"
                    />
                  </h1>
                </div>
                <div className="content-description">
                  <p>
                    <p> Watch the official gameplay walkthrough </p>
                    <p>for Ubisoft’s upcoming open-world Star </p>
                  </p>
                </div>
                <p className="cta-links-container " data-cta-type="button">
                  <span className="cta-item" data-title="Watch Now">
                    <span className="btn-container">
                      <a
                        href="https://youtu.be/c7K2TA0bBpY"
                        className="button large blue cta-link ada-el-focus youtube-url"
                        role="button"
                        data-youtube-id="c7K2TA0bBpY"
                      >
                        Watch Now
                      </a>
                    </span>
                  </span>
                  <span className="cta-item" data-title="Explore">
                    <span className="btn-container">
                      <a
                        href="https://www.starwars.com/games-apps/star-wars-outlaws"
                        className="button large blue cta-link ada-el-focus center-btn secondary FlexContentHero"
                        role="button"
                      >
                        <span className="btn-text">Explore</span>
                      </a>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={imagen2} alt="Imagen 2" />
            <div className="carousel-overlay overlay-image2">
              <div className="content-details">
                <div className="content-title">
                  <h1>
                    <img
                      className="logo-title"
                      src="https://lumiere-a.akamaihd.net/v1/images/twiij-logo-final_5f9af589.png?region=0,0,500,470"
                      alt="This Week in Indiana Jones logo"
                    />
                  </h1>
                </div>
                <div className="content-description">
                  <p>
                    <p>This or Hat, Indiana Jones 101, and more!</p>
                    <p>Indiana Jones and the Dial of Destiny is in</p>
                    <p>theaters today!</p>
                  </p>
                </div>
                <p className="cta-links-container">
                  <span className="cta-item" data-title="Watch Now">
                    <a
                      href="https://youtu.be/zq1ArzOQc-o"
                      className="button large blue cta-link ada-el-focus center-btn FlexContentHero youtube-url"
                      role="button"
                      data-youtube-id="zq1ArzOQc-o"
                    >
                      Watch Now
                    </a>
                  </span>
                  <span className="cta-item" data-title="Get Tickets">
                    <a
                      href="https://www.fandango.com/indiana-jones-and-the-dial-of-destiny-2023-230475/movie-overview"
                      className="button large blue cta-link ada-el-focus center-btn secondary FlexContentHero"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-text">Get Tickets</span>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={imagen3} alt="Imagen 3" />
            <div className="carousel-overlay overlay-image3">
              <div className="content-title">
                <p>Marvel Will Bring</p>
                <p>the Obi-Wan Kenobi</p>
                <p>Disney+ Series</p>
                <p>to Comics</p>
              </div>
              <div className="content-description">
                <p>
                  <p>Check out the covers of issue #1 and meet</p>
                  <p>the creative team.</p>
                </p>
              </div>
              <p className="cta-links-container " data-cta-type="button">
                <span className="cta-item" data-title="Read More">
                  <span className="btn-container">
                    <a
                      href="https://www.starwars.com/news/marvel-star-wars-obi-wan-kenobi"
                      className="button large blue cta-link ada-el-focus"
                      role="button"
                    >
                      Read More
                    </a>
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div>
            <img src={imagen4} alt="Imagen 4" />
            <div className="carousel-overlay overlay-image4">
              <div className="content-details">
                <div className="content-title">
                  <h1>
                    <img
                      className="logo-title"
                      alt="Disney Gallery: The Mandalorian logo"
                      src="https://lumiere-a.akamaihd.net/v1/images/disney-gallery-the-mandalorian-s3-module-hero-logo_4bb32455.png?region=0,0,800,280"
                    />
                  </h1>
                </div>
                <div className="content-description">
                  <p>
                    <p>Go behind the scenes in the all-new</p>
                    <p>special Disney Gallery: The Mandalorian,</p>
                    <p>streaming June 28 on Disney+.</p>
                  </p>
                </div>
                <p className="cta-links-container" data-cta-type="button">
                  <span className="cta-item" data-title="Watch Clip">
                    <span className="btn-container">
                      <a
                        href="https://youtu.be/KVnTWuVPPkM"
                        className="button large blue cta-link ada-el-focus youtube-url"
                        role="button"
                        data-youtube-id="KVnTWuVPPkM"
                      >
                        Watch Clip
                      </a>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
