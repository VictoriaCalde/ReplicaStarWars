import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";


import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <Header />
      <div className="content">{/* Contenido principal de la página */}</div>
      <NavigationBar />
    
    </div>
  );
}

export default App;
