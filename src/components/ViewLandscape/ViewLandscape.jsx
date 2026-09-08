import flowers1 from "../../assets/flores-top.png";
import flowers2 from "../../assets/flores-bottom.png";
import "./ViewLandscape.css";

function ViewLandscape() {
  return (
    <section className="ViewLandscape-container">
      <img src={flowers1} className="flower-top" />
      <h2>
        Meli <span>&</span> Iván
      </h2>
      <p>Nuestra Boda</p>

      <h5>Por favor rota tu dispositivo para una mejor experiencia</h5>
      <img src={flowers2} className="flower-bottom" />
    </section>
  );
}

export default ViewLandscape;
