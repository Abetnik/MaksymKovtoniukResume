import React, { useState, forwardRef } from "react";
import { FaGlobe, FaPhone, FaEnvelope, FaDownload } from "react-icons/fa";
import profilePic from "../assets/images/profile.png";
import backgroundVideo from "../assets/videos/background.mp4";
import "../assets/css/hero.css";

const HeroSection = forwardRef(({ contactFormRef }, ref) => {  // Добавил forwardRef
  const [showOptions, setShowOptions] = useState(false);

  // Функция скачивания резюме
  const handleDownload = (lang) => {
    const resumeLinks = {
      en: "https://drive.google.com/uc?export=download&id=13-3g6eRrwBbRVSpU9ShlwZjXHsV9atOP",
      pl: "https://drive.google.com/uc?export=download&id=13-3g6eRrwBbRVSpU9ShlwZjXHsV9atOP",
    };
    window.open(resumeLinks[lang], "_blank");
    setShowOptions(false);
  };

  // Функция плавного скролла к FinalSection (оставляем для иконки почты)
  const scrollToContactForm = () => {
    if (contactFormRef && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" ref={ref}>  {/* Добавил ref сюда */}
      <div className="video-overlay"></div>
      <video className="hero-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="profile-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />

          <div className="resume-download-container">
            <button className="resume-button" onClick={() => setShowOptions(!showOptions)}>
              <FaDownload /> Download Resume
            </button>
            {showOptions && (
              <div className="resume-options">
                <button onClick={() => handleDownload("en")}>English</button>
                <button onClick={() => handleDownload("pl")}>Polski</button>
              </div>
            )}
          </div>
        </div>

        <h1 className="hero-title">3D/2D GENERALIST ARTIST</h1>
        <p className="hero-subtitle">Maksym Kovtoniuk</p>

        <div className="contact-icons">
          <a href="#" title="Email" onClick={(e) => {
            e.preventDefault();
            scrollToContactForm();
          }}>
            <FaEnvelope />
          </a>
          <a href="tel:+1234567890" title="Phone">
            <FaPhone />
          </a>
          <a href="https://www.linkedin.com/in/maksym-kovtoniuk-9a427934b/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
