import "./Header.scss";

import { useEffect, useState } from "react";

export default function Header({ scrollContainerRef }) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > 60
      ) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  return (
    <header className={shrink ? "shrink" : ""}>
      <h1>Nathan Delange</h1>
      <nav>
        <a href="#first-work-card">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
