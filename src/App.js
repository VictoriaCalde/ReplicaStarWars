import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Carousel from "./components/Carousel";
import Carousel3 from "./components/Carousel3";

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
      <Carousel3 />
      <Footer />

      <div className="content">{/* Contenido principal de la página */}</div>
    </div>
  );
}

export default App;
