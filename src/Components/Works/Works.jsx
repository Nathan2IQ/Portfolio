import "./Works.scss";
import Json from "../../Data/data.json";
import { useEffect } from "react";

export default function Works() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
          // Animation image
          const img = entry.target.querySelector(".work-img");
          if (img) img.classList.add("show-img");
          // Animation texte
          const text = entry.target.querySelector(".work-text");
          if (text) text.classList.add("show-text");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
          // Animation image
          const img = entry.target.querySelector(".work-img");
          if (img) img.classList.remove("show-img");
          // Animation texte
          const text = entry.target.querySelector(".work-text");
          if (text) text.classList.remove("show-text");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".work-card");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section className="gallery">
      {Json.map((work, idx) => {
        const isRight = idx % 2 === 1;
        const cardType = isRight ? "card-right" : "card-left";

        return (
          <div
            key={idx}
            className={`hidden work-card ${cardType}${
              isRight ? " reverse" : ""
            }`}
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
