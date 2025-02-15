import React, { useRef } from "react";
import useInView from "../hooks/useInView";
import "../assets/css/about.css";

const About = () => {
  const aboutRef = useRef(null);
  const isAboutVisible = useInView(aboutRef);

  return (
    <>
      {/* Градиентный переход */}
      <div className="gradient-overlay"></div>

      <section ref={aboutRef} className={`about-section fade-in ${isAboutVisible ? "visible" : ""}`}>
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>
            I am a <strong>3D Generalist Artist</strong> with extensive knowledge and advanced skills in{" "}
            <strong>3D graphics</strong>.
          </p>
          <p>
            Over the years, I have worked on a variety of projects, including{" "}
            <strong>games, films, commercials, and animations</strong>, refining my expertise in creating{" "}
            <strong>realistic and captivating visualizations</strong>.
          </p>
          <p>
            My strength lies not only in technical proficiency but also in <strong>adaptability</strong>—whether it’s
            collaborating with teams, adjusting to new projects, or solving complex challenges. I excel in working across
            different artistic styles and aesthetics, ensuring that each project meets its unique{" "}
            <strong>creative and technical requirements</strong>.
          </p>
          <p>
            Additionally, I leverage <strong>AI-powered tools</strong> to enhance workflow efficiency, streamline asset
            creation, and push the boundaries of visual storytelling. By combining traditional artistry with{" "}
            <strong>cutting-edge AI technologies</strong>, I can optimize processes while maintaining artistic integrity
            and delivering <strong>high-quality, industry-standard results</strong>.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
