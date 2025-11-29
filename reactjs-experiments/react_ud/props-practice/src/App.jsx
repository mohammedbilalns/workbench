import contacts from "./contacts";
import Card from "./Card.jsx";
// import Avatar from "./Avatar.jsx";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      image={contact.imgURL}
      number={contact.phone}
      email={contact.email}
    ></Card>
  );
}

function App() {
  return (
    <>
      <div>
        <h1 className="heading">My Contacts </h1>
        {/* <Avatar image="https://placehold.co/600x400"></Avatar> */}
        {contacts.map(createCard)}
        {/* 
        <Card
          name={contacts[0].name}
          image={contacts[0].imgURL}
          number={contacts[0].phone}
          email={contacts[0].email}
        ></Card>

        <Card
          name={contacts[1].name}
          image={contacts[1].imgURL}
          number={contacts[1].phone}
          email={contacts[1].email}
        ></Card>

        <Card
          name={contacts[2].name}
          image={contacts[2].imgURL}
          number={contacts[2].phone}
          email={contacts[2].email}
        ></Card> */}
      </div>
    </>
  );
}

export default App;
