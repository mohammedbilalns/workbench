import { products } from "./data";
import "./App.css";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [count , setCount] = useState(0)
  const filteredProducts = useMemo(() => {
    console.log("filtered products")
    if (selectedCategory == "none") return products;
    return products.filter((product) => product.category == selectedCategory);
  }, [selectedCategory]);

  // let filteredProducts = []
  // if(selectedCategory == "none"){
  //   console.log("recalculated")
  //   filteredProducts = products
  // }else {
  //   console.log("recalculated")
  //   filteredProducts = products.filter((product)=>product.category == selectedCategory)

  // }

  const handleChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <select
        onChange={(e) => handleChange(e.target.value)}
        name="filter"
        id="filter"
      >
        <option value="none">Select a category</option>
        <option value="Beauty">Beauty</option>
        <option value="Books">Books</option>
        <option value="Home">Home</option>
        <option value="Electronics">Electronics</option>
      </select>
      {filteredProducts.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h2>Category: {data.category}</h2>
            <h3>Price: {data.price}</h3>
          </div>
        );
      })}

      {count}
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </>
  );
}

export default App;
