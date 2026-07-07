function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
