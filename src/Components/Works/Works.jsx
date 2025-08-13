import "./Works.scss";
import Json from "../../Data/data.json";

export default function Works() {
  return (
    <section className="gallery">
      {Json.map((work, idx) => (
        <div
          key={idx}
          className={`work-card${idx % 2 === 1 ? " reverse" : ""}`}
        >
          {idx % 2 === 1 ? (
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
              <img src={work.image} alt={work.title} />
            </>
          ) : (
            <>
              <img src={work.image} alt={work.title} />
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
      ))}
    </section>
  );
}
