import { useState } from "react";
import Envelope from "./components/Envelope/Envelope.jsx";
import Music from "./components/Music/Music.jsx";
import Home from "./components/Home/Home.jsx";
import Carrusel from "./components/Carrusel/Carrusel.jsx";
import Places from "./components/Places/Places.jsx";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="content">
        <Envelope onActive={() => setIsOpen(true)} />
        {isOpen ? (
          <>
            <Music />
            <Home />
            <Places />
            <Carrusel />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
