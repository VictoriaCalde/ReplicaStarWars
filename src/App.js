import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import Carousel from "./components/Carousel";

//import DisneyGallery from "./components/DisneyGallery";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Category />
      <Header />
      <Carousel />
      <Category />
      <Footer />

      
    
      
      <div className="content">{/* Contenido principal de la página */}</div>
    </div>
  );
}

export default App;
