import Student from "./Student";
import Card from "./Card";
function App() {
  return (
    /*<>
      <Student name="fsldkjfksdljf" age={34} isStudent={true}></Student>
      <Student name="sdfljsdkfjl" age={43} isStudent={false}></Student>
      <Student name="sfdlij sfsldkj " age={56} isStudent={false}></Student>
      <Student name="weroijoiwej" age={23} isStudent={true}></Student>
      <Student></Student>
    </>*/

    <>
      <Card
        title="Beyonce"
        image="https://placehold.co/400"
        number="-91545454545"
        email="some@email.com"
      ></Card>
      <Card
        title="Jack Beurie"
        image="https://placehold.co/400"
        number="6545554554"
        email="fkjsdnjkfsnjn"
      ></Card>
    </>
  );
}

export default App;
