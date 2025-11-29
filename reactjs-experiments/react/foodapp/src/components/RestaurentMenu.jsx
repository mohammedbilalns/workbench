import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import {addItem } from "../utils/cartSlice"
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer></Shimmer>;
  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

    const dispatch = useDispatch()

  const handleAdd = (item)=>{
    dispatch(addItem(item ))

  }
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>cost for two : {costForTwo}</h3>
      <ul>
        <li>Biryani <button onClick={()=>handleAdd("biriyani")}>Add to cart</button></li>
        <li>Burgers  <button onClick={()=>handleAdd('Burgers')}>Add to cart</button></li>
        <li>Diet Coke  <button onClick={()=> handleAdd('Diet Coke')} >Add to cart</button> </li>

      </ul>
    </div>
  );
};

export default RestaurantMenu;
