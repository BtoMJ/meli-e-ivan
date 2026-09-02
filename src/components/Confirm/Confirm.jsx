import { FaWhatsapp } from "react-icons/fa";
import flower from "../../assets/ramo.png";
import confirm from "../../assets/confirm.png";
import "./Confirm.css";

function Confirm() {
  const sendToWhatsapp = () => {
    const message = "Confirmo asistencia al evento";

    const phone = "5214761037311";

    const urlWhatsApp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(urlWhatsApp, "_blank");
  };
  return (
    <div className="confirm-container">
      <div className="confirm-header">
        <img src={flower} alt="ramo de flores" className="flower" />
        <h3>Asistencia</h3>
        <img src={flower} alt="ramo de flores" className="flower" />
      </div>

      <img className="confirm-img" src={confirm} alt="confirmar asistencia" />

      <p>¡Te agradecemos por acompañarnos en este día tan importante!</p>
      <br />
      <p>Favor de confirmar tu asistencia antes del evento.</p>
      <br />
      <p>¡Gracias por ser parte de nuestra historia!</p>
      <div className="pase"></div>
      <button className="btn-whatsapp" onClick={sendToWhatsapp}>
        <FaWhatsapp className="whatsapp-icon" /> Confirmar
      </button>
    </div>
  );
}

export default Confirm;
