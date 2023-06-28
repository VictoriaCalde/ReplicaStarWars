import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black container-fluid">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mt-2" id="navbarTogglerDemo01">
        <a className="navbar-brand text-white" href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="navbar-brand text-white" href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="navbar-brand text-white" href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="navbar-brand text-white navbar-brand-divider" href="#">
          <FontAwesomeIcon icon={faTwitter} />
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
