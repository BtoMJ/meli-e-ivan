import Countdown from "../Countdown/Countdown";
import WeddingCalendar from "../WeddingCalendar/WeddingCalendar";
import photo from "../../assets/novios/foto-6-date.png";
import flower from "../../assets/ramo.png";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <p className="love-phrase">
        Cuando te das cuenta de que quieres pasar el resto de tu vida con
        alguien, deseas que el resto de tu vida empiece lo antes posible.
      </p>
      <div className="photo">
        <img src={photo} alt="foto de los novios" />
      </div>
      <div className="calendar">
        <div className="calendar-header">
          <img src={flower} alt="ramo de flores" className="flower" />
          <h3>Reserva el día</h3>
          <img src={flower} alt="ramo de flores" className="flower" />
        </div>
        <WeddingCalendar />
      </div>
      <Countdown />
    </div>
  );
}

export default Home;
