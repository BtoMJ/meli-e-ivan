import { useState } from "react";
import seal from "../../assets/sobre/sello.png";
import flowers1 from "../../assets/flores-top.png";
import flowers2 from "../../assets/flores-bottom.png";
import side1 from "../../assets/sobre/left.png";
import side2 from "../../assets/sobre/right.png";
import bottom from "../../assets/sobre/flap2.png";
import top from "../../assets/sobre/flap1.png";
import novios from "../../assets/novios/foto-7-letter.png";

import "./Envelope.css";
function Envelope({ onActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={`envelope-container ${isOpen ? "opened" : ""}`}>
        <img className="top-flowers" src={flowers1} alt="flores arriba" />
        <img className="bottom-flowers" src={flowers2} alt="flores abajo" />
        {!isOpen && (
          <div className="title-envelope">
            <h2>
              Meli <span>&</span> Iván
            </h2>
            <p>Nuestra Boda</p>
          </div>
        )}

        <div
          className="envelope"
          onClick={() => {
            onActive();
            handleOpen();
          }}
        >
          {!isOpen && (
            <div className="seal">
              <img src={seal} alt="sello" />
            </div>
          )}
          <div className="sides">
            <img src={side1} alt="lado izquierdo sobre" />
            <img src={side2} alt="lado derecho sobre" />
          </div>
          <div className="bottom-envelope">
            <img src={bottom} alt="lado de abajo del sobre" />
          </div>
          <div className="top-envelope">
            <img className="flap" src={top} alt="lado de arriba del sobre" />
          </div>
          {isOpen && (
            <div className="letter">
              <div className="novios">
                <img src={novios} alt="foto de los novios" />
              </div>
              <div className="title-letter">
                <h2>
                  Meli <span>&</span> Iván
                </h2>
              </div>
              <h3>Tenemos el honor de invitarte a nuestra boda</h3>
              <h2 className="date-wedding">
                24 <span>|</span> Octubre <span>|</span> 2026
              </h2>
            </div>
          )}
        </div>
        {!isOpen && <p className="open-text">Toca el sobre para abrir</p>}
      </div>
    </>
  );
}

export default Envelope;
