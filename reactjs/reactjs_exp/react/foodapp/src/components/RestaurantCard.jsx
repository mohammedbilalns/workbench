import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ data }) => {
  console.log(data);
  const {
    name,
    locality,
    cloudinaryImageId,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
    cuisines,
    id,
  } = data.info;

  
  return (
    <Link to={`/restaurent/${id}`}>
      
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="res-details">
          <h3>{name}</h3>
          <p className="cuisines">{cuisines?.join(", ")}</p>
          <p>
            📍 {locality}, {areaName}
          </p>
          <p>
            ⭐ {avgRatingString} ({totalRatingsString})
          </p>
          <p>🚚 {sla.deliveryTime} mins</p>
        </div>
      </div>

    </Link>
  );
};



export default RestaurantCard;
