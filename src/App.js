import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import SkillBoard from "./components/SkillBoard";
import Softwares from "./components/Softwares";
import FinalSection from "./components/FinalSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

import "./assets/css/styles.css";

function App() {
  const contactFormRef = useRef(null); // Используем ref для FinalSection
  const firstSectionRef = useRef(null); // Ссылка на первую секцию

  // Функция скролла к форме в FinalSection
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Передаем ref корректно */}
      <HeroSection ref={firstSectionRef} contactFormRef={contactFormRef} scrollToContactForm={scrollToContactForm} />
      <About />
      <Experience />
      <SkillBoard />
      <Softwares />
      <Portfolio />
      <FinalSection ref={contactFormRef} />

      {/* Кнопка вверх */}
      <ScrollToTopButton firstSectionRef={firstSectionRef} />
    </>
  );
}

export default App;
