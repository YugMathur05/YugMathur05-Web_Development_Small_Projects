const min=1;
const max=100;
const number=Math.floor(Math.random()*max)+min;
let attempts=0;
let guesses;
let running=true;
while(running)
{
    guesses=prompt(`guess a number between ${min}-${max}`);
    guesses=Number(guesses);
    if(guesses>max||guesses<min||isNaN(guesses))
    {
        alert("pls enter a valid number")
    }else{
        attempts++;
        if(guesses>number)
        {
            alert("number is too high")
        }
        else if(guesses<number)
        {
            alert("number is too low")
        }
        else{
            alert(`correct! the answer was ${number} , it tooks ${attempts} number of attempts`)
            running=false;
        }
    }
}