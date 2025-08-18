import "./Works.scss";
import Json from "../../Data/data.json";
import { useEffect, useRef } from "react";

export default function Works() {
  const animated = useRef(new Set());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio >= 0.5 &&
            !animated.current.has(entry.target)
          ) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
            // Animation image
            const img = entry.target.querySelector(".work-img");
            if (img) img.classList.add("show-img");
            // Animation texte
            const text = entry.target.querySelector(".work-text");
            if (text) text.classList.add("show-text");
            animated.current.add(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const hiddenElements = document.querySelectorAll(".work-card");
    hiddenElements.forEach((el) => {
      // Si déjà animée, on ne l'observe plus
      if (!animated.current.has(el)) {
        observer.observe(el);
      } else {
        el.classList.add("show");
        el.classList.remove("hidden");
      }
    });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section className="gallery" id="projets">
      {Json.map((work, idx) => {
        const isRight = idx % 2 === 1;
        const cardType = isRight ? "card-right" : "card-left";
        // Utiliser un id unique si possible, sinon fallback sur l'index
        const key = work.id ? work.id : idx;
        // Ajout d'un id sur la première carte pour l'ancre
        const cardId = idx === 0 ? { id: "first-work-card" } : {};
        return (
          <div
            key={key}
            className={`hidden work-card ${cardType}${
              isRight ? " reverse" : ""
            }`}
            {...cardId}
          >
            {isRight ? (
              <>
                <div className="work-text">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-tech-logos">
                    {work.tech &&
                      work.tech.map((tech) => (
                        <img
                          key={tech}
                          src={`/assets/logos/${tech}.png`}
                          alt={tech}
                          title={tech}
                          className="code__logo"
                        />
                      ))}
                  </div>
                </div>
                <img className="work-img" src={work.image} alt={work.title} />
              </>
            ) : (
              <>
                <img className="work-img" src={work.image} alt={work.title} />
                <div className="work-text">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-tech-logos">
                    {work.tech &&
                      work.tech.map((tech) => (
                        <img
                          key={tech}
                          src={`/assets/logos/${tech}.png`}
                          alt={tech}
                          title={tech}
                          className="code__logo"
                        />
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}
