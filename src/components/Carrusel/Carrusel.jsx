import { useState, useEffect, useRef } from "react";
import corner1 from "../../assets/novios/corner1.png";
import corner2 from "../../assets/novios/corner2.png";
import photo1 from "../../assets/novios/foto-7-corregida.jpeg";
import "./Carrusel.css";

const slides = [
  <div className="slide-container-1"></div>,
  <div className="slide-container-2"></div>,
  <div className="slide-container-3"></div>,
  <div className="slide-container-4"></div>,
  <div className="slide-container-5"></div>,
  <div className="slide-container-6"></div>,
  <div className="slide-container-7"></div>,
  <div className="slide-container-8"></div>,
  <div className="slide-container-9"></div>,
];

function Carrusel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2700;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % slides.length),
      delay,
    );
    return () => resetTimeout();
  }, [index]);

  return (
    <div className="carrusel-container">
      <img src={corner1} alt="ramo de flores 1" className="flower-corner-1" />
      <img src={corner2} alt="ramo de flores 2" className="flower-corner-2" />
      <div className="carousel-fade">
        <img src={photo1} alt="foto novios" />
        {/* {slides.map((content, i) => (
          <div key={i} className={`fade-slide ${i === index ? "active" : ""}`}>
            {content}
          </div>
        ))} */}
      </div>

      <p className="cita">
        Cada foto guarda un momento, cada momento nos acerca al para siempre.
      </p>
      <p className="end-title">Te esperamos</p>
    </div>
  );
}

export default Carrusel;
