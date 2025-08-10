import "./Video.scss";
import Video from "../../assets/video__background_smoke.mp4";

export default function () {
  return (
    <div className="video-container">
      <video
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="video"
      />
      <div className="video__text">
        <h2>Développeur Front-End</h2>
        <p>
          Passionné par les nouvelles technologies, j'apprends tout ce que le
          monde du développement peut m'offrir. J'aime le design, le code et
          surtout la créativité que cela offre.
        </p>
      </div>
    </div>
  );
}
