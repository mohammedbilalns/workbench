import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className="p-6 space-y-6">
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
