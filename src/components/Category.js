import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Category.css";

const Category = () => {
    return (
        <nav className="navbar-category navbar-expand-lg navbar-dark bg-dark mt-4">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white "  href="https://www.starwars.com/news"> NEWS + FEATURES </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="https://www.starwars.com/video">VIDEO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/films">FILMS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/series">SERIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/interactive">INTERACTIVE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/community">COMMUNITY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/databank">DATABANK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.starwars.com/disneyplus">DISNEY+</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Category;
