import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus()

  const getTopRated = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) => parseFloat(res.info.avgRatingString) >= 4.5)
    );
  };

  const handleSearch = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  if(onlineStatus == false ) return <h1>Looks like you're offline!! please check your internet connection </h1>
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>Search</button>
        <button className="btn" onClick={getTopRated}>Top Rated ⭐</button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
