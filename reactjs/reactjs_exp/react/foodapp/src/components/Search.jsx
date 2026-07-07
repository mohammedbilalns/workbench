import { useEffect } from "react";
import { useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ce66bb868a104eb783512bbecafa8958";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="max-w-xl w-full p-10 relative mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-2 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
