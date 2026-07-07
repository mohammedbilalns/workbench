import emojipedia from "./emojipedia";

const listOfMeanings = emojipedia.map((emoji) =>
  emoji.meaning.substring(1, 100)
);

console.log(listOfMeanings);
//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
