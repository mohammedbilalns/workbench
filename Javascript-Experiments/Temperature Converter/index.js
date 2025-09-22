const textBox = document.getElementById("textBox")
const toFaren = document.getElementById("toFaren")
const toDegree = document.getElementById("toDegree")
const result = document.getElementById("result")

function degreetoFaren(degree){
    return (degree*(9/5) + 32).toFixed(1)

}
function farentoDegree(faren){
    return (faren-32)*(5/9).toFixed(1)
}
function convert(){
    unit = textBox.value
    if(toFaren.checked){
        result.textContent = degreetoFaren(unit)+" F"
    }
    else if(toDegree.checked){
        result.textContent = farentoDegree(unit)+ " °C"
    }else{
        result.textContent = "Select a unit";
    }
}
textBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent default behavior
      convert()
    }
  });

