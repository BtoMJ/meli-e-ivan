import church from "../../assets/itinierario/church.png";
import reception from "../../assets/itinierario/reception.png";
import cake from "../../assets/itinierario/cake.png";
import flower from "../../assets/ramo.png";
import rama3 from "../../assets/itinierario/rama3.png";
import rama2 from "../../assets/itinierario/rama2.png";
import "./Places.css";

function Places() {
  return (
    <div className="places-container">
      <div className="rama-left">
        <img src={rama3} alt="rama de flores" />
      </div>
      <div className="rama-right">
        <img src={rama2} alt="rama de flores" />
      </div>
      <div className="places-header">
        <img src={flower} alt="ramo de flores" className="flower" />
        <h3>Itinerario</h3>
        <img src={flower} alt="ramo de flores" className="flower" />
      </div>

      <div className="item">
        <h2>Ceremonia</h2>
        <img src={church} alt="ícono iglesia" />
        <h4>Catedral Metropolitana</h4>
        <p>1:00 p.m.</p>
        <a
          href="https://share.google/GEw5hRtAU635HwxcJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Google Maps
        </a>
      </div>

      <div className="item">
        <h2>Recepción</h2>
        <img src={reception} alt="ícono iglesia" />
        <h4>Quinta La Gaviota</h4>
        <p>3:00 p.m.</p>
        <a
          href="https://maps.app.goo.gl/fr6iX1gEehH84frJ8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Google Maps
        </a>
      </div>

      <div className="item">
        <h2>Comida</h2>
        <img src={cake} alt="ícono iglesia" />
        <h4>Quinta La Gaviota</h4>
        <p>5:00 p.m.</p>
      </div>
    </div>
  );
}

export default Places;
