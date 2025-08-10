import "./App.scss";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Video from "./Components/Video/Video.jsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="video-header-container">
        <Video />
      </div>
      <main className="main-content"></main>
      <Footer />
    </>
  );
}
