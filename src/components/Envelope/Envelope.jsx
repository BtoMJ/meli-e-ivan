import { useState } from "react";
import seal from "../../assets/sobre/sello.png";
import flowers1 from "../../assets/flores-top.png";
import flowers2 from "../../assets/flores-bottom.png";
import side1 from "../../assets/sobre/left.png";
import side2 from "../../assets/sobre/right.png";
import bottom from "../../assets/sobre/flap2.png";
import top from "../../assets/sobre/flap1.png";
import "./Envelope.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className={`envelope-container ${isOpen ? "opened" : ""}`}>
      <img className="top-flowers" src={flowers1} alt="flores" />
      <img className="bottom-flowers" src={flowers2} alt="flores" />
      <div className="title-envelope">
        <h2>
          Meli <span>&</span> Iván
        </h2>
        <p>Nuestra Boda</p>
      </div>

      <div className="envelope2">
        {!isOpen && (
          <div className="seal">
            <img src={seal} alt="sello" />
          </div>
        )}
        <div className="top-envelope">
          <img src={top} alt="lado de abajo del sobre" />
        </div>
        <div className="bottom-envelope">
          <img src={bottom} alt="lado de abajo del sobre" />
        </div>
        <div className="sides">
          <img src={side1} alt="lado sobre izquierdo" />
          <img src={side2} alt="lado sobre derecho" />
        </div>
      </div>
      {!isOpen && <p className="open-text">Toca el sobre para abrir</p>}

      {/* <div className="envelope" onClick={handleOpen}> */}
      {/* Carta */}
      {/* <div className="letter">
          <div className="letter-content">
            <p>Estás invitado</p>
            <h1>✨ Nuestra Boda ✨</h1>
            <p>Con mucho amor te invitamos a compartir este día especial.</p>
          </div>
        </div> */}

      {/* Parte trasera del sobre */}
      {/* <div className="envelope-back"></div> */}

      {/* Solapa */}
      {/* <div className="flap"></div> */}

      {/* Frente del sobre */}
      {/* <div className="envelope-front"></div> */}

      {/* Sello */}
      {/* {!isOpen && (
          <div className="seal">
            <img src={seal} alt="sello" />
          </div>
        )} */}
      {/* </div> */}

      {/* {!isOpen && <p className="open-text">Toca el sobre para abrir</p>} */}
    </div>
  );
}

export default Home;
