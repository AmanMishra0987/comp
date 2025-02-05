import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../index.css";
import "./HomePage.css";
import logo1 from "../images/3-01.jpg";
import logo2 from "../images/4-01.jpg";
import logo3 from "../images/5 (1).jpg";
import logo4 from "../images/8.jpg";
import logo5 from "../images/7.jpg";
import logo6 from "../images/Amanlogo.avif";
import logo7 from "../images/5 (1).jpg";
import logo8 from "../images/4-01.jpg";
import logo9 from "../images/3-01.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    filterOptions();
  }, [searchValue]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const filterOptions = () => {
    const filtered = [
      "In need of Digital Marketing Solutions",
      "Looking for best brand visibility or Public Relation solutions",
      "Search of optimum Event Management support",
      "Looking for right Influencer Marketing solutions",
      "Looking for assistance in MICE solutions?",
    ].filter((option) =>
      option.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  // Hide Chat Bot link when footer appears
  useEffect(() => {
    const chatIcon = document.getElementById("chat-bot");
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          chatIcon.style.display = "none";
        } else {
          chatIcon.style.display = "block";
        }
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <>
      <div
        className="background-1 container-fluid"
        style={{ background: "#fff" }}
      >
        <div
          className="content-2 container-fluid"
          style={{ background: "#fff" }}
        >
          <h1 className="h1 " style={{ background: "#fff", color: "black" }}>
            {" "}
            Are you Looking for
            <span class="change_content my-2" style={{ background: "#fff" }}>
              {" "}
            </span>{" "}
          </h1>
        </div>
        <div
          className="container-2  conatiner-fluid"
          style={{ background: "#fff", height: "265px" }}
        >
          <div
            className="content-3 container-fluid"
            style={{ background: "#fff" }}
          >
            <div className="content-4" style={{ background: "#fff" }}>
              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link to="/services/digital-marketing" className="home-links">
                  <i class="fa-solid fa-clock text-decoration-none"></i>
                  <span className="text1">Digital Marketing</span>
                </Link>
              </div>

              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link className="home-links" to="/services/public-relation">
                  <i class="fa-solid fa-handshake-simple"></i>
                  <span className="text1">Public Relation</span>
                </Link>
              </div>
              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link
                  className="home-links"
                  to="/services/influential-marketing"
                >
                  <i class="fa-solid fa-business-time"></i>
                  <span className="text1">Influential Marketing</span>
                </Link>
              </div>

              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link className="home-links" target="_blank" to="#">
                  <i class="fa-sharp fa-solid fa-microphone"></i>
                  <span className="text1">Mcmv</span>
                </Link>
              </div>
            </div>

            <div className="content-4" style={{ background: "#fff" }}>
              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link className="home-links" target="_blank" to="#">
                  <i class="fa-sharp fa-solid fa-plane"></i>
                  <span className="text1">Book Our Stays</span>
                </Link>
              </div>
              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link className="home-links" to="/fashion">
                  <i class="fa-solid fa-glasses"></i>
                  <span className="text1">Fashion</span>
                </Link>
              </div>

              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link className="home-links" to="/eventatatraski">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span className="text1">Events & Exhibit</span>
                </Link>
              </div>
              <div className="box boxes mx-2" style={{ background: "#fff" }}>
                <Link
                  className="home-links"
                  to="/services/intellectual-property"
                >
                  <i class="fa-solid fa-shield-halved"></i>
                  <span className="text1">Intellectual property</span>
                </Link>
              </div>
            </div>
            <div
              className="content-4 mx-2"
              style={{ background: "#fff" }}
            ></div>
          </div>
        </div>
        <div class="parent" id="chat-bot">
          <div class="bottom" onClick={() => navigate("/chat")}>
            <i class="fa-solid fa-comment"></i>
            <div className="mx-2">Chat</div>
            <br></br>
          </div>
        </div>
      </div>

      <div
        className="background-image-res cont1"
        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: "100%",

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>

      <div
        className="container2 cont1"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "80vh",
          zIndex: "-1",

          position: "relative",
          /* other CSS styles */
        }}
      >
        <img src="images/imageb.jpg" alt="" />
      </div>

      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "80vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: "100% auto",
          backgroundAttachment: "fixed",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",

          zIndex: "-1",
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo5})`,
          backgroundSize: "100% auto",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          zIndex: "-1",

          /* other CSS styles */
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: "100% auto",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo9})`,
          backgroundSize: "100% auto",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="cont1"
        style={{
          backgroundImage: `url(${logo6})`,
          backgroundSize: "100% auto",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
      ></div>
    </>
  );
};

export default HomePage;
