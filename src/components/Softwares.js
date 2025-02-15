import React, { useRef } from "react";
import useInView from "../hooks/useInView";
import "../assets/css/softwares.css";

// Импорт логотипов
import BlenderLogo from "../assets/images/blender.png";
import UnrealLogo from "../assets/images/unreal.png";
import SubstanceLogo from "../assets/images/substance.png";
import AELogo from "../assets/images/aftereffects.png";
import PhotoshopLogo from "../assets/images/photoshop.png";
import FigmaLogo from "../assets/images/figma.png";
import MaxLogo from "../assets/images/3dmax.png";
import CinemaLogo from "../assets/images/cinema.png";
import VrayLogo from "../assets/images/vray.png";

const softwares = [
  { name: "Blender", logo: BlenderLogo },
  { name: "Unreal Engine", logo: UnrealLogo },
  { name: "Substance Painter", logo: SubstanceLogo },
  { name: "After Effects", logo: AELogo },
  { name: "Photoshop", logo: PhotoshopLogo },
  { name: "Figma", logo: FigmaLogo },
  { name: "3ds Max", logo: MaxLogo },
  { name: "Cinema 4D", logo: CinemaLogo },
  { name: "V-Ray", logo: VrayLogo },
];

const Softwares = () => {
  const aboutRef = useRef(null);
  const isAboutVisible = useInView(aboutRef);
  
  return (
    <section ref={aboutRef} className={`software-section fade-in ${isAboutVisible ? "visible" : ""}`}>
      <h2 className="softwares-title">SOFTWARES</h2>
      <div className="softwares-container">
        {softwares.map((software, index) => (
          <div key={index} className="software-item">
            <img src={software.logo} alt={software.name} />
            <div className="software-name">{software.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Softwares;
