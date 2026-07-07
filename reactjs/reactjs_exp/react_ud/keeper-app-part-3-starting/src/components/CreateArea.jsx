import React, { useState } from "react";

function CreateArea(props) {
  const [inputContent, setInputContent] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputContent((prevVal) => {
      return { ...prevVal, [name]: value };
    }); // stores the value of user input in input content
  }

  function handleClick(event) {
    event.preventDefault();
    props.onSubmit(inputContent); // passing the user input to parent component
    setInputContent({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        {/* <h1>
          {noteContent.title} {noteContent.content}
        </h1> */}
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={inputContent.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={inputContent.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
