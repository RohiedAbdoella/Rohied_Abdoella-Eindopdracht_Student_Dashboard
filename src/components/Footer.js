import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';


function Footer() {
    return (
        <div className="social-container">
            <h4>Rohied Abdoella - 2022 </h4>

            <a href="https://twitter.com/RohiedAbdoella">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.facebook.com/rohied.abdoella">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/rohied-abdoella-35567b13b/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.github.com/RohiedAbdoella">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    )
}

export default Footer;