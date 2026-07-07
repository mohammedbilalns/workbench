export default function FoodItem({ food, setFoodId }) {
  return (
    <div className=" bg-white max-w-sm  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 text-center flex flex-col justify-between">
      <img
        src={food.image}
        alt={food.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h5 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
        {food.title}
      </h5>

      <button
        onClick={() => {
          console.log(food.id);
          setFoodId(food.id);
        }}
        className="bg-rose-600 cursor-pointer hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
      >
        View Recipe
      </button>
    </div>
  );
}
