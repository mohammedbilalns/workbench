import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seonds = time.getSeconds();
    const meidiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${paddZero(hours)}:${paddZero(minutes)}:${paddZero(
      seonds
    )} ${meidiem}`;
  }

  function paddZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
