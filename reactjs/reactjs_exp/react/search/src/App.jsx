import { useEffect, useState } from "react";

function App() {
  const [resultArr, setResultArr] = useState([]);
  const [query, setQuery] = useState("");
  let arr = ["a", "ab", "abc", "abcd"];
  useEffect(() => {
    setResultArr(arr.filter((elem) => elem.startsWith(query)));
  }, [query]);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {resultArr.map((elem) => (
        <div>{elem}</div>
      ))}
    </>
  );
}

export default App;
