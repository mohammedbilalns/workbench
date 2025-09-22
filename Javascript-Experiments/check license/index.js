const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resulElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
   age = myText.value;
   age = Number(age);
   if (isNaN(age)) {
      resulElement.textContent = "Invalid input"
      return 
   }

   if (age >= 100) {
      resulElement.textContent = `you are over the age`;
   } else if (age >= 18) {
      resulElement.textContent = `you can drive`;
   } else {
      resulElement.textContent = `You are under age`;
   }
}