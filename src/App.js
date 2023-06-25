import NavigationBar from "./components/NavigationBar";
import Category from "./components/Category";
import Header from "./components/Header";
import React from "react";
import "./App.css";


function App() {
  return (
    <div className="landing-page">
      <NavigationBar />
      <Category/>
      <Header />
      <div className="content">{/* Contenido principal de la página */}</div>
    </div>
  );
}

export default App;
