import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Bilal"></UserGreeting>
    </>
  );
}

export default App;
