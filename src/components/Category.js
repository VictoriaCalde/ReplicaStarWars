import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Category.css";

const Category = () => {
    return (
        <nav className="navbar-category navbar-expand-lg navbar-dark bg-dark mt-4">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#"> NEWS + FEATURES </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">VIDEO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">FILMS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">SERIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">INTERACTIVE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">COMMUNITY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">DATABANK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">DISNEY+</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Category;
