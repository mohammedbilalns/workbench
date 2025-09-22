import UserDetails from "./components/UserDetails";

function App() {
  const data = [
    { id: 1, name: "Leanne Graham", email: "leannegraham@gmail.com" },
    { id: 2, name: "Ervin Howell", email: "erwinhowell@gmail.com" },
  ];
  return <>
  {data.map(user=> <UserDetails key={user.id} user={user}></UserDetails>)}
  </>;
}

export default App;
