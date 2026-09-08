import { useState } from "react";
import Envelope from "./components/Envelope/Envelope.jsx";
import Music from "./components/Music/Music.jsx";
import Home from "./components/Home/Home.jsx";
import Carrusel from "./components/Carrusel/Carrusel.jsx";
import Places from "./components/Places/Places.jsx";
import DressCode from "./components/DressCode/DressCode.jsx";
import Confirm from "./components/Confirm/Confirm.jsx";

import useOrientation from "./hooks/useOrientation.jsx";

import "./index.css";
import ViewLandscape from "./components/ViewLandscape/ViewLandscape.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const screenOrientation = useOrientation();

  return (
    <div className="container">
      {screenOrientation === "portrait" ? (
        <div className="content">
          <Envelope onActive={() => setIsOpen(true)} />
          {isOpen ? (
            <>
              <Music />
              <Home />
              <Places />
              <Carrusel />
              <DressCode />
              <Confirm />
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <ViewLandscape />
      )}
    </div>
  );
}

export default App;
