import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black container-fluid">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mt-2" >
        <a className="navbar-brand text-white" href="https://www.facebook.com/StarWars">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="navbar-brand text-white" href="https://www.instagram.com/starwars/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="navbar-brand text-white" href="https://www.youtube.com/user/starwars">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="navbar-brand text-white navbar-brand-divider" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fstarwars">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a class="link aw-independent" style={{ marginTop: '-4px' }} href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="Star Wars Kids"></img>
        </a>

        <div class="container mt-2">
          <a className="navbar-brand text-white" href="#">

            SEARCH
          </a>
          <a className="navbar-brand text-white" href="#">
            SING IN
          </a>
        </div>

      </div>

      <div className="star-wars-div mt-5">
        <img className="star-wars-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" alt="Star Wars Button"></img>
      </div>

    </nav>
  );
};

export default Navbar;
