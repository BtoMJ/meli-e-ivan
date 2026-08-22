// import texture from "../../assets/sobre/olivo-texture.jpg";
import seal from "../../assets/sobre/sello.png";
import "./Envelope2.css";

function Envelope2() {
  return (
    <div className="envelope-container">
      <div className="seal-container">
        <img className="seal" src={seal} alt="sello" />
      </div>
      {/* <h1>
        Meli <span>&</span> Iván
      </h1> */}
      <div className="x">
        <div className="y"></div>
        {/* <img src={texture} /> */}
      </div>
    </div>
  );
}

export default Envelope2;
