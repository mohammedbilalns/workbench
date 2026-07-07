import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteCards, setNoteCards] = useState([]);

  function updateNotes(input) {
    console.log(input);
    setNoteCards((prevVal) => {
      return [
        ...prevVal,
        { cardTitle: input.title, cardContent: input.content },
      ];
    });
  } // gets the user input from child and append on the noteCards list

  function deleteNote(id) {
    console.log(id);
    setNoteCards((prevNotes) => prevNotes.filter((note, index) => index != id));
  }
  return (
    <div>
      <Header />
      <CreateArea onSubmit={updateNotes} />
      {noteCards.map((card, index) => (
        <Note
          getId={deleteNote}
          key={index}
          id={index}
          title={card.cardTitle}
          content={card.cardContent}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
