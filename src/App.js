import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import Carousel3 from "./components/Carousel3";
import Carousel4 from "./components/Carousel4";

//import DisneyGallery from "./components/DisneyGallery";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Category />
      <Carousel />
      <Carousel2/>
      <Carousel3 />
      <Carousel4 />
      <Footer />

      <div className="content">{/* Contenido principal de la página */}</div>
    </div>
  );
}

export default App;
