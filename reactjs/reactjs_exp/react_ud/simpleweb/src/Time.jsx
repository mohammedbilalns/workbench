function Time() {
  const date = new Date(); // gets the curent date
  const currentHour = date.getHours(); // gets the current hour in 24 hour format
  let greeting = "";
  let customStyle = {
    color: "",
  };
  if (currentHour <= 12) {
    greeting = "Good Morning";
    customStyle.color = "green";
  } else if (currentHour <= 18) {
    greeting = "Good Evening";
    customStyle.color = "red";
  } else {
    greeting = "Good Night";
    customStyle.color = "yellow";
  }

  return <h1 style={customStyle}>{greeting}</h1>;
}

export default Time;
