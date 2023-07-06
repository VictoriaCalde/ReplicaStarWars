import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
const Footer = () => {
    return (
        <div class="footer-menus">
            <div class="social-prompt mt-5">More From Star Wars:</div>
            <div class="horizontal-list">
                <ul class="mt-2">
                    <li class="facebook social-icon">
                        <a className="navbar-brand text-white" href="https://www.facebook.com/StarWars">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li class="instagram social-icon">
                        <a className="navbar-brand text-white" href="https://www.instagram.com/starwars/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li class="twitter social-icon">
                        <a className="navbar-brand text-white " href="https://www.youtube.com/user/starwars">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li class="youtube social-icon">
                        <a className="navbar-brand text-white navbar-brand-divider" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fstarwars">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                    <li class="kids social-icon">
                        <a class="link aw-independent" href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="Star Wars Kids"></img>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="menu-primary mt-2">
                <nav role="navigation" aria-label="Primary footer menu">
                    <ul class="horizontal">
                        <li>
                            <a href="http://disneytermsofuse.com/" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="https://support.disney.com/hc/en-us/articles/360000829466-Legal-Notices" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Additional Content Information
                            </a>
                        </li>
                        <li>
                            <a href="http://disneyprivacycenter.com/" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://disneyprivacycenter.com/kids-privacy-policy/english/" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Children's Online Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://disneyprivacycenter.com/notice-to-california-residents/" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Your California Privacy Rights
                            </a>
                        </li>
                        <li>
                            <a href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Star Wars at shopDisney
                            </a>
                        </li>
                        <li>
                            <a href="https://support.starwars.com/" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Star Wars Helpdesk
                            </a>
                        </li>
                        <li>
                            <a href="http://preferences-mgr.truste.com/?type=starwars&affiliateId=115" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Interest-Based Ads
                            </a>
                        </li>
                        <li>
                            <a href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d" target="_blank" rel="noopener noreferrer" class="link_footer aw-independent">
                                Do Not Sell My Personal Information
                            </a>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    );
};

export default Footer;