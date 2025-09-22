import fs from "fs"
// Source and destination file paths
const sourceFile = './sam.txt';
const destinationFile = 'temp.txt';

// Read the content of the source file
fs.readFile(sourceFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Write the content to the destination file
  fs.writeFile(destinationFile, data, (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      console.log('File copied successfully!');
    }
  });
});
