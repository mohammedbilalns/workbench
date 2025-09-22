
const minnum = 1;
const maxnum = 100;
const answer =Math.floor( (Math.random()*(maxnum - minnum +1))) ;

console.log(answer)

let attempts = 0 
let guess;
let running = true;
while(running){
    guess = Number(window.prompt(`Guess a number between ${minnum} and ${maxnum}`))
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }else if(guess < minnum || guess > maxnum){
        window.alert("Please number a valid number")
    }else{
        attempts++
        if(guess<answer){
            window.alert("Too low try again")
        }else if(guess > answer){
            window.alert("Too high Try again")
        }else{
            window.alert(`Your answer was ${answer}. It took you ${attempts} attempts`)
            running = false

        }
    }

}