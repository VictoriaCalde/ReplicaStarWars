/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imagen1 from "../components/imagenes/ahsoka-date-featured_49f1d5aa.jpeg";
import imagen2 from "../components/imagenes/maxresdefault.jpg";
import imagen3 from "../components/imagenes/maxresdefault (1).jpg";
import imagen4 from "../components/imagenes/ahsoka-swce-articlefeat_bcc6bfbd.jpeg";
import imagen5 from "../components/imagenes/maxresdefault (2).jpg";
import imagen6 from "../components/imagenes/st-recap-swce-articlefeat_a1e419b9.jpeg";
import imagen7 from "../components/imagenes/maxresdefault (3).jpg";
import imagen8 from "../components/imagenes/ahsoka-panel-swce-articlefeat_4b1f77ee.jpeg";

import "./Carousel2.css";

const Carousel2 = () => {
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
                    <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.starwars.com/news/ahsoka-premiere-date"
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
                </div>
            ),
        },
        {
            src: imagen2,
            details: (
                <div className="entity-details text-left visible">
                    <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=J7-zia4oHuk&t=4s"
                        className="entity-link title-link show-details"
                        data-title="“Begin” | Ahsoka"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span>
                                Begin” | Ahsoka
                            </span>
                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen3,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=HnzNZ0Mdx4I"
                        className="entity-link title-link show-details"
                        data-title="Teaser Trailer | Ahsoka"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span>
                                Teaser Trailer | Ahsoka
                            </span>
                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen4,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.starwars.com/news/swce-2023-ahsoka-trailer"
                        className="entity-link title-link show-details"
                        data-title="SWCE 2023: The Ahsoka Trailer Is Here"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span>
                                SWCE 2023: The Ahsoka Trailer Is Here
                            </span>
                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen5,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=8RZiIf_oEAc"
                        className="entity-link title-link show-details"
                        data-title="Rosario Dawsn an Natasha Liu Bordizzo Take the Stage at SWCA 2022 | Star Wars Celebration Live!"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span>
                                Rosario Dawsn an Natasha Liu Bordizzo Take the
                                Stage at SWCA 2022 | Star Wars Celebration Live!
                            </span>
                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen6,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.starwars.com/news/swce-2023-lucasfilm-studio-showcase"
                        className="entity-link title-link show-details"
                        data-title="SWCE 2023: 11 Highlights From Lucasfilm's Studio Showcase"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span>
                                SWCE 2023: 11 Highlights From Lucasfilm's Studio Showcase
                            </span>
                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen7,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=d2M-j5CVRww"
                        className="entity-link title-link show-details"
                        data-title="Ahsoka Panel Recap | Star Wars Celebration 2023 "
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span> Ahsoka Panel Recap | Star Wars Celebration 2023 </span>

                        </h3>
                    </a>
                </div>
            ),
        },
        {
            src: imagen8,
            details: (
                <div className="entity-details text-left visible">
                        <div className="notch-contain5 mt-2"></div>
                    <div className="decal-contain">
                        <div className="decal"></div>
                    </div>
                    <a
                        href="https://www.starwars.com/news/swce-2023-ahsoka-panel"
                        className="entity-link title-link show-details"
                        data-title="SWCE 2023: 10 Things We Learned from the Ahsoka Panel"
                        tabIndex="-1"
                    >
                        <h3 className="title no_focus">
                            <span> SWCE 2023: 10 Things We Learned from the Ahsoka Panel </span>
                        </h3>
                    </a>
                </div>
            ),
        },
    ];

    return (
        <div className="aspect" >

            <img
                tabindex="0"
                data-src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-series-hero-desktop_e5d97bd5.jpeg?region=0,0,1200,510"
                id="ref-1-3--img--idx-0"
                alt="Ahsoka Tano"
                data-aspect_ratio="0.425"
                data-orientation="landscape"
                data-legacy="true"
                src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-series-hero-desktop_e5d97bd5.jpeg?region=0,0,1200,510"
                style={{ position: 'absolute', zIndex: '-1', width: '100%', height: 'auto' }}
            />

            <div class="content-overlay   content-left content-middle  text-center   text-light mt-5" style={{ marginLeft: '50px' }}>
                <div class="content-body">
                    <div class="content-details" style={{ maxWidth: '36%' }}>
                        <div class="content-title ">
                            <img class="logo-title" width="600" height="193" data-src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-logo-desktop_083fbe8d.png?region=0,0,600,193" alt="Ahsoka Logo" tabindex="0" style={{ width: '400px' }} data-width="600" data-height="193" data-aspect_ratio="0.3217" data-orientation="landscape" data-legacy="true" src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-logo-desktop_083fbe8d.png?region=0,0,600,193"></img>
                        </div>
                        <div class="content-description mt-2" tabindex="0" style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginTop: '-5%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            <p style={{ marginBottom: '0em' }}>
                                Ahsoka Tano investigates an emerging</p>
                            <p style={{ marginBottom: '0em' }}> threat to the galaxy. Original series </p>
                            <p style={{ marginBottom: '0em' }}> streaming August 23, only on Disney+.
                            </p>
                        </div>
                        <p className="cta-links-container mt-4">
                            <span className="cta-item" data-title="Explore">
                                <a
                                    href="https://www.starwars.com/series/star-wars-ahsoka"
                                    role="button"
                                    style={{
                                        backgroundColor: '#ffdf00',
                                        border: 'none',
                                        borderRadius: '50px',
                                        color: 'black',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        padding: '10px 40px',
                                    }}
                                >
                                    Explore
                                </a>


                            </span>
                        </p>
                    </div>

                </div>
            </div>

            <div className="carousel2-wrapper" style={{ marginTop: '100px' }}>

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
        </div>

    );
};

export default Carousel2;


