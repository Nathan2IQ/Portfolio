import "./Header.scss";

import { useEffect, useState } from "react";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={shrink ? "shrink" : ""}>
      <h1>Nathan Delange</h1>
      <nav>
        <a>À Propos</a>
        <a>Projets</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}
