import corner1 from "../../assets/novios/corner1.png";
import corner2 from "../../assets/novios/corner2.png";
import photo1 from "../../assets/novios/foto-7-corregida.jpeg";
import "./Carrusel.css";

function Carrusel() {
  return (
    <div className="carrusel-container">
      <div className="carousel-fade">
        <img src={corner1} alt="ramo de flores 1" className="flower-corner-1" />
        <img src={photo1} alt="foto novios" />
        <img src={corner2} alt="ramo de flores 2" className="flower-corner-2" />
      </div>

      <p className="cita">
        Cada foto guarda un momento, cada momento nos acerca al para siempre.
      </p>
      <p className="end-title">Te esperamos</p>
    </div>
  );
}

export default Carrusel;
