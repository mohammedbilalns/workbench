import React, { useState, useEffect } from "react";

function AnotherComponent() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    document.title = `size: ${dimensions.width} x ${dimensions.height}`;
  }, [dimensions.width, dimensions.height]);

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  return (
    <>
      <p>Window Width: {dimensions.width}px</p>
      <p>Wndow height: {dimensions.height}px</p>
    </>
  );
}

export default AnotherComponent;
