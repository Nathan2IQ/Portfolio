import "./Footer.scss";

export default function () {
  return (
    <footer>
      <div className="contact">
        <div>
          <h3>Merci pour votre visite !</h3>
        </div>

        <div className="contact__links">
          <p>
            <i className="fa-solid fa-envelope"></i>nathan.delange00@gmail.com
          </p>
          <p>|</p>
          <a href="https://github.com/Nathan2IQ">
            <i className="fa-brands fa-github"></i>GitHub
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>©Tout droits réservés - Nathan Delange 2025</p>
      </div>
    </footer>
  );
}
