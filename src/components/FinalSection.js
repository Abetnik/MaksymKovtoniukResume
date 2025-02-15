import React, { useState, useRef, forwardRef } from "react";
import emailjs from "emailjs-com";
import "../assets/css/finalSection.css";
import useInView from "../hooks/useInView";

const FinalSection = forwardRef((props, ref) => {
  const localRef = useRef(null); // Создаем локальный ref
  const formRef = ref || localRef; // Если ref передан из App.js, используем его

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const isFormVisible = useInView(formRef);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_r8jl5wi", "template_86dpvol", templateParams, "scp9YYzemgX3RqFs8")
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <section id="contact-form" ref={formRef} className={`final-section ${isFormVisible ? "visible" : ""}`}>
      <div className="final-section-content">
        <h2 className="final-slogan">Let's Build Something Great Together!</h2>

        {isSent ? (
          <p className="success-message">✅ Message sent successfully!</p>
        ) : (
          <form className={`contact-form ${isFormVisible ? "fade-in" : ""}`} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <textarea name="message" placeholder="Your Message" rows="8" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="send-btn">🚀 Send Message</button>
          </form>
        )}

        {/* Social Links */}
<div className={`social-links ${isFormVisible ? "fade-in" : ""}`}>
  <a href="https://www.linkedin.com/in/ВАШ_ЛОГИН/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://t.me/ВАШ_ЮЗЕРНЕЙМ" target="_blank" rel="noopener noreferrer">Telegram</a>
  <a href="https://www.instagram.com/ВАШ_ЛОГИН/" target="_blank" rel="noopener noreferrer">Instagram</a>
  <a href="https://www.artstation.com/ВАШ_ЛОГИН" target="_blank" rel="noopener noreferrer">ArtStation</a>
</div>

      </div>
    </section>
  );
});

export default FinalSection;
