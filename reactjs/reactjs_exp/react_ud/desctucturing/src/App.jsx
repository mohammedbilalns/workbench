// import { useState } from "react";
import cars from "./practice";
function App() {
  const [tesla, honda] = cars;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  // console.log(teslaColoursByPopularity);
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default App;
