import React, { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#FFFFdF");

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color PIcker</h1>
      <p>Selected Color: {color}</p>

      <div
        className="color-display"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
