import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 5, name: "cocunut", calories: 105 },
    { id: 6, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celer", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 10, name: "corn", calories: 63 },
    { id: 11, name: "broccoli", calories: 50 },
  ];
  return (
    <>
      {fruits.length > 0 ? (
        <List items={fruits} category="fruits"></List>
      ) : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="vegetables"></List>
      ) : null}
    </>
  );
}

export default App;
