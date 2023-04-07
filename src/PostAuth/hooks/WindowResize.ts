

import { useState, useEffect } from "react";

export default function useWindowResize() {
    
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);



  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.window.innerHeight);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
}
