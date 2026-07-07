import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ce66bb868a104eb783512bbecafa8958";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className="bg-blue-50">
      <div>
        <h1> {food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>Prep Time: {food.readyInMinutes} Minutes</strong>
      </span>
      <span>
        <strong>Serves: {food.servings}</strong>
      </span>
      <span>{food.vegetarian ? "Vegitarian" : "Non-Vegetarian"}</span>
      <span>{food.vegan ? "Vegan" : ""}</span>
      <div>
        <span>${(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
      </div>

      <div>
        <h2>Instructions</h2>
      </div>
    </div>
  );
}
