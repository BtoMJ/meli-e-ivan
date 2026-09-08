import { useEffect, useState } from "react";

const getDeviceType = () => {
  if (typeof window === "undefined") {
    return "desktop";
  }

  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";

  // iPhone, iPod y Android
  const isMobileUA = /Android|iPhone|iPod|Mobile/i.test(userAgent);

  // iPad tradicional
  const isIPadUA = /iPad/i.test(userAgent);

  // iPadOS 13+ puede identificarse como Mac
  const isIPadOS = platform === "MacIntel" && navigator.maxTouchPoints > 1;

  // Pantalla táctil con puntero grueso
  const isTouchDevice =
    navigator.maxTouchPoints > 0 &&
    window.matchMedia("(pointer: coarse)").matches;

  if (isMobileUA || isIPadUA || isIPadOS) {
    return "mobile";
  }

  // Tablets/dispositivos táctiles que no fueron
  // identificados por el userAgent
  if (isTouchDevice) {
    return "tablet";
  }

  return "desktop";
};

const getOrientation = () => {
  const deviceType = getDeviceType();

  // En PC no nos importa la orientación
  if (deviceType === "desktop") {
    return "desktop";
  }

  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
};

const useDeviceOrientation = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType);
  const [orientation, setOrientation] = useState(getOrientation);

  useEffect(() => {
    const updateDevice = () => {
      setDeviceType(getDeviceType());
      setOrientation(getOrientation());
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");

    mediaQuery.addEventListener("change", updateDevice);

    window.addEventListener("resize", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);

      window.removeEventListener("resize", updateDevice);
    };
  }, []);

  return {
    deviceType,
    orientation,

    isMobile: deviceType === "mobile" || deviceType === "tablet",

    isDesktop: deviceType === "desktop",

    isPortrait: orientation === "portrait",

    isLandscape: orientation === "landscape",
  };
};

export default useDeviceOrientation;
