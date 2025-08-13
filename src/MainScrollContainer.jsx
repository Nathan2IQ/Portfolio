import React, { useRef } from "react";
import Video from "./Components/Video/Video";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./MainScrollContainer.scss";

const MainScrollContainer = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <Header scrollContainerRef={scrollRef} />
      <div className="scroll-container" ref={scrollRef}>
        <section className="video-header-container">
          <Video />
        </section>
        <main className="main-content">
          <Works />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainScrollContainer;
