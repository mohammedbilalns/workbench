import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer></Shimmer>;
  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>cost for two : {costForTwo}</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
