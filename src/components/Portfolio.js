import React from "react";
import { motion } from "framer-motion";
import "../assets/css/portfolio.css";

const projects = [
  {
    id: 1,
    title: "Cinematic 3D Environment",
    description: "A stunning 3D environment created in Unreal Engine 5.",
    type: "video",
    url: require("../assets/videos/Pub.mp4"),
  },

  {
    id: 2,
    title: "",
    description: "",
    type: "image",
    url: require("../assets/images/Pub01.png"),
  },

  {
    id: 3,
    title: "",
    description: "",
    type: "video",
    url: require("../assets/videos/Village.mp4"),
  },


  {
    id: 4,
    title: "Motion Design Breakdown",
    description: "A breakdown of motion design and animation work.",
    type: "video",
    url: require("../assets/videos/ArmaniGlases.mp4"),
  },

  {
    id: 5,
    title: "",
    description: "",
    type: "video",
    url: require("../assets/videos/Porshe.mp4"),
  },

  {
    id: 6,
    title: "",
    description: "",
    type: "video",
    url: require("../assets/videos/Bank.mp4"),
  },

  {
    id: 7,
    title: "Architectural Vizualization",
    description: "Stunning architectural visualization with lifelike detail.",
    type: "video",
    url: require("../assets/videos/ArchViz01.mp4"),
  },

  {
    id: 8,
    title: "",
    description: "",
    type: "video",
    url: require("../assets/videos/ArchViz02.mp4"),
  },

  {
    id: 9,
    title: "",
    description: "",
    type: "video",
    url: require("../assets/videos/ArchViz03.mp4"),
  },

];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* ✅ Анимированный заголовок */}
      <motion.h1
        className="portfolio-title-main"
        initial={{ opacity: 0, y: -50 }} // Исходное положение (выше и скрыто)
        whileInView={{ opacity: 1, y: 0 }} // Анимация при скролле
        transition={{ duration: 0.8, ease: "easeOut" }} // Плавное появление
        viewport={{ once: true }} // Анимация срабатывает один раз
      >
         Portfolio Showcase 
      </motion.h1>

      {/* 🔹 Проход по всем проектам */}
      {projects.map((project, index) => (
  <motion.div
    key={project.id}
    className={`portfolio-section ${index === 0 ? "first-section" : ""} ${
      index === projects.length - 1 ? "last-section" : ""
    }`}
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* ✅ Градиент сверху на первой секции */}
    {index === 0 && <div className="gradient-top"></div>}

    {/* ✅ Градиент снизу на последней секции */}
    {index === projects.length - 1 && <div className="gradient-bottom"></div>}

    {/* ✅ Градиент сверху на первой секции */}
    {index === 0 && <div className="gradient-overlay"></div>}

    {/* ✅ Градиент снизу на последней секции */}
    {index === projects.length - 1 && <div className="gradient-overlay-bottom"></div>}

    {/* 🔹 Контент проекта */}
    <div className="portfolio-content">
      <h2 className="portfolio-title">{project.title}</h2>
      <p className="portfolio-description">{project.description}</p>
    </div>

    {/* 🔹 Видео или изображение с градиентами */}
    <div className="portfolio-media-wrapper">
      {/* Левый градиент */}
      <div className="gradient-left"></div>

      {project.type === "video" ? (
        <video className="portfolio-media"  autoPlay muted loop>
          <source src={project.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="portfolio-media" src={project.url} alt={project.title} />
      )}

      {/* Правый градиент */}
      <div className="gradient-right"></div>
    </div>
  </motion.div>
))}

    </div>
  );
};

export default Portfolio;