import dress from "../../assets/dress-code.png";
import gifts from "../../assets/souvenir.png";
import { FaAmazon } from "react-icons/fa";
import "./DressCode.css";

function DressCode() {
  return (
    <div className="dress-container">
      <div className="dress-item">
        <h2>Dress Code</h2>
        <img src={dress} alt="ícono vestimenta" />
        <h4>Asiste con ropa formal</h4>
      </div>
      <div className="dress-item">
        <h2>Mesa de Regalos</h2>
        <img src={gifts} alt="ícono vestimenta" />
        <p>
          Para nosotros, el mejor regalo es compartir este 24 de octubre con
          ustedes.
          <br />
          <br />
          Sin embargo, si desean tener un detalle para nuestro hogar, les
          compartimos ésta opción:
        </p>
        <a
          href="https://www.amazon.com.mx/wedding/guest-view/23Z6VSLLIQALL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAmazon className="icon" /> Amazon
        </a>
        <p>
          O si desean darnos otro detalle o sorpresa que nazca de su corazón
          será recibido con muchísimo cariño.
        </p>
      </div>
    </div>
  );
}

export default DressCode;
