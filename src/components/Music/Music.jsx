import { useState, useEffect } from "react";
import useSound from "use-sound";
import music from "../../assets/music.mp3";
import { FaPlay, FaStop } from "react-icons/fa";
import "./Music.css";

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function Music() {
  const [icon, setIcon] = useState(false);
  const [play, { stop }] = useSound(music);

  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    // Check the context state when the component mounts
    if (audioCtx.state === "suspended") {
      console.log(
        "AudioContext is suspended. Waiting for user interaction to resume.",
      );
    }
  }, []);

  const resumeAudioContext = async () => {
    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
      setIsAudioReady(true);
      console.log("AudioContext resumed successfully.");
      // You can now play your audio here
      playAudio();
    }
  };

  const playAudio = () => {
    // Example of playing a sound (connect your nodes here)
    // const oscillator = audioCtx.createOscillator();
    // oscillator.connect(audioCtx.destination);
    // oscillator.start();
    console.log("Audio playback started.");
  };

  return (
    <div>
      {!isAudioReady ? (
        <button onClick={() => setIcon(!icon)} className="btn-music">
          {icon === true ? (
            <p onClick={() => stop()}>
              <FaStop className="btn-stop" />
            </p>
          ) : (
            <p onClick={() => play()}>
              <FaPlay className="btn-play" />
            </p>
          )}
        </button>
      ) : (
        <p>Sound is enabled. Audio can play automatically now.</p>
      )}
    </div>
  );
}

export default Music;
