import { useEffect, useState } from "react";

function useOrientation() {
  const [orientation, setOrientation] = useState(
    window.matchMedia("(orientation: portrait)").matches
      ? "portrait"
      : "landscape",
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleChange = (e) => {
      setOrientation(e.matches ? "portrait" : "landscape");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return orientation;
}

export default useOrientation;
