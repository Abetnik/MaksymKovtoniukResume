import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../assets/css/styles.css";

const ScrollToTopButton = ({ firstSectionRef }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    console.log("🔹 useEffect запустился");

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log("🔥 Прокрутка сработала! scrollTop:", scrollTop);
      console.log("🔽 Высота экрана:", window.innerHeight);

      if (scrollTop > window.innerHeight) {
        if (!showScrollButton) {
          console.log("✅ Должно быть TRUE, показываем кнопку");
          setShowScrollButton(true);
          setHideAnimation(false);
        }
      } else {
        if (showScrollButton) {
          console.log("❌ Должно быть FALSE, запускаем анимацию скрытия");
          setHideAnimation(true);
          setTimeout(() => {
            setShowScrollButton(false);
          }, 400); // Даем 400ms на анимацию перед скрытием
        }
      }
    };

    document.addEventListener("wheel", handleScroll);
    console.log("✅ addEventListener добавлен (wheel)");

    return () => {
      console.log("🗑️ Обработчик удален");
      document.removeEventListener("wheel", handleScroll);
    };
  }, [showScrollButton]);

  console.log("🔄 Рендер кнопки. Текущее состояние showScrollButton:", showScrollButton);

  const scrollToTop = () => {
    console.log("⬆️ Прокручиваем к первой секции");
    if (firstSectionRef?.current) {
      firstSectionRef.current.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        console.log("🔽 Скрываем кнопку после возврата на HeroSection");
        setHideAnimation(true);
        setTimeout(() => {
          setShowScrollButton(false);
        }, 400); // Ждем завершения анимации скрытия
      }, 1000); // Даем время на плавный скролл
    }
  };

  return (
    <button
      className={`scroll-to-top ${showScrollButton ? "show" : ""} ${hideAnimation ? "hide" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
