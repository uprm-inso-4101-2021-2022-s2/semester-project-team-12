import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon className="icon" icon={faTwitter} size="xl" />
      <FontAwesomeIcon className="icon" icon={faFacebook} size="xl" />
      <FontAwesomeIcon className="icon" icon={faInstagram}  size="xl" />
    </div>
  );
};

export default Footer;
