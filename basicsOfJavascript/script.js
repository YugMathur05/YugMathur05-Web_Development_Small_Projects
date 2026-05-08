let decreasebtn=document.getElementById("decrease");
let resetbtn=document.getElementById("reset");
let increasebtn=document.getElementById("increase");
let counting=document.getElementById("count");
let count=0;

decreasebtn.onclick = function decrease()
{
    count--;
    counting.innerText=count;

}
increasebtn.onclick = function decrease()
{
    count++;
    counting.innerText=count;

}
resetbtn.onclick = function decrease()
{
    count=0;
    counting.innerText=count;

}
