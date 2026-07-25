import { useEffect } from "react";

const ScrollReveal = () => {

  useEffect(() => {

const elements = document.querySelectorAll(
".reveal,.fade-up,.fade-left,.fade-right,.fade-down,.zoom-in,.stagger"
);

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
           entry.target.classList.add("active");
observer.unobserve(entry.target);
          }

        });

      },

      {
        threshold: 0.15,
      }

    );

    elements.forEach((element) => observer.observe(element));

    return () => {

      elements.forEach((element) => observer.unobserve(element));

    };

  }, []);

  return null;
};

export default ScrollReveal;