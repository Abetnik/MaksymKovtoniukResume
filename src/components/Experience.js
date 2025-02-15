import React, { useState } from "react";
import useInView from "../hooks/useInView";
import "../assets/css/experience.css";

const experiences = [
    {
        id: 1,
        company: "Fiverr",
        role: "Freelance 3D Artist, 2017 - 2019",
        logo: require("../assets/images/ExpLogo01.png"),
        details:
            "Started my journey in 3D on Fiverr, taking on various projects—modeling for games, product visualization, motion design, and rendering for presentations. Worked with different styles, met tight deadlines, and communicated directly with clients. Handling revisions and feedback improved my attention to detail and problem-solving skills. This experience built a strong foundation in both technical anion to detail and problem-solving skills. This experience built a strong foundation in both technical anion to detail and problem-solving skills. This experience built a strong foundation in both technical anion to detail and problem-solving skills. This experience built a strong foundation in both technical anion to detail and problem-solving skills. This experience built a strong foundation in both technical and client-oriented work"
    },
    {
        id: 2,
        company: "AMM Production",
        role: "3D Generalist, 2019 - 2023",
        logo: require("../assets/images/ExpLogo02.jpg"),
        details:
            "Worked across the full 3D production pipeline—from concept development and prototyping to modeling, texturing, lighting, animation, motion design, and final rendering. Gained experience leading projects and mentoring team members, sharing knowledge and helping others refine their skills. Used a wide range of 3D and 2D tools, including motion design for both 3D and 2D animation. Collaborated with various clients and companies, contributing to projects of different scales and complexities. This hands-on experience strengthened my expertise in character design, architectural visualization, special effects, and dynamic motion graphics"
    },
    {
        id: 3,
        company: "Extra Render",
        role: "Senior 3D Artist, 2023 - 2025",
        logo: require("../assets/images/ExpLogo03.png"),
        details:
            "Combined architectural expertise with 3D artistry to design visually compelling and functional spaces. Transitioning from traditional architecture to 3D design, developed a deep understanding of spatial composition, aesthetics, and technical precision. Focused on creating high-quality visualizations, ensuring both artistic value and practical application. Known for meticulous attention to detail and an ability to translate architectural concepts into immersive 3D experiences. Played a key role in projects requiring a blend of architectural knowledge and advanced 3D techniques, contributing to both creative direction and technical execution"
    }
];

const Experience = () => {
    const aboutRef = useState(null);
    const isAboutVisible = useInView(aboutRef);
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
               
    };

    return (
        <section ref={aboutRef} className={`experience-section fade-in ${isAboutVisible ? "visible" : ""}`}>
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="experience-container">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className={`experience-card ${expandedCard === exp.id ? "expanded" : ""}`}
                        onClick={() => toggleCard(exp.id)}
                    >
                        <img src={exp.logo} alt={exp.company} className="company-logo" />
                        <h3>{exp.company}</h3>
                        <p>{exp.role}</p>
                        <div className={`details-container ${expandedCard === exp.id ? "show" : ""}`}>
                            <p className="experience-details">{exp.details}</p>
                            <hr className="experience-line" />
                        </div>
                        <button className="more-btn">
                            {expandedCard === exp.id ? "Close" : "More"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
