import { useState, useEffect } from "react";

const useInView = (ref, threshold = 0.55) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(ref.current); // Останавливаем наблюдение после появления
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
};

export default useInView;
