import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* <p>{props.id}</p> */}
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image}></Avatar>
      </div>
      <div className="bottom">
        <Details detailInfo={props.number}></Details>
        <Details detailInfo={props.email}></Details>
      </div>
    </div>
  );
}

export default Card;
