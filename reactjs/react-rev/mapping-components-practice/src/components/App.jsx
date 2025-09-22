import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  function createEntry(emojiterm) {
    return (
      <Entry
        key={emojiterm.key}
        emoji={emojiterm.emoji}
        title={emojiterm.name}
        text={emojiterm.meaning}
      ></Entry>
    );
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
