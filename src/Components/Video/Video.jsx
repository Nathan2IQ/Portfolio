import "./Video.scss";
import Video from "../../assets/video__background_smoke.mp4";
import Tilt from "react-parallax-tilt";

export default function () {
  return (
    <div
      className="video-container"
      style={{ width: "100vw", height: "100vh" }}
    >
      <video
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="video"
      />
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        glareEnable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="video__text">
          <h2>Développeur Front-End</h2>
          <p>
            Passionné par les nouvelles technologies, j'apprends tout ce que le
            monde du développement peut m'offrir. J'aime le design, le code et
            surtout la créativité que cela offre. Pour cela j'ai donc commencé
            une formation d'intégrateur JavaScript, et compte bien continuer à
            progresser.
          </p>
        </div>
      </Tilt>
    </div>
  );
}
