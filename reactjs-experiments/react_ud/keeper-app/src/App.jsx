import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <>
      <Header></Header>

      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content}></Note>
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
