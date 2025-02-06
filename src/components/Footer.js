import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/Amanlogo.avif";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  console.log(location);

  const footerLogoClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className="footer text-white footermmm"
      id="footer"
      style={
        location.pathname !== "/" ? { boxShadow: "0 -6px 20px #fc0c8c" } : {}
      }
    >
      <div className="contact-container">
        <div className="contact">
          <p
            className="text-white"
            id="contact"
            style={{ marginLeft: "-2px", marginBottom: "-7px" }}
          >
            <i style={{ color: "#fc0c8c" }} className="fa fa-envelope"></i>
            aman098mishra@gmail.com
          </p>

          <p
            className="text-white"
            id="contact"
            style={{ marginLeft: "-0.3px" }}
          >
            <i className="fa fa-phone" style={{ color: "#fc0c8c" }}></i>
            {/* <span style={{ color: "#fc0c8c" }}>Contact No:</span>{" "} */}
            <a href="tel:8853014345">8853014345</a> /{" "}
            <a href="tel:8853014345">8853014345</a>
          </p>
          <div className="social-media">
            <Link to="https://x.com/" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="icon" size="2xl" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="icon" size="2xl" />
            </Link>
          </div>
        </div>

        <Link to="/" onClick={footerLogoClickHandler}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="office-address-container">
        <div className="address">
          <h4>Aman India </h4>
          <a href="##" target="_blank" rel="noopener noreferrer">
            O-8, Block g, judge Park, sakaldiha, Delhi 11
          </a>
        </div>
        <div className="address">
          <h4>Aman India </h4>
          <a href="#dd" target="_blank" rel="noopener noreferrer">
            Kamalapur Dum Dum Cant delhi - 70008
          </a>
        </div>
      </div>

      <div className="footer-links">
        <Link className="navbar-link" to="/careers">
          Careers
        </Link>
        <Link className="navbar-link" to="/ContactUs">
          Contact us
        </Link>
        <Link className="navbar-link" to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
