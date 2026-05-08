let button=document.getElementById("mybtn");
let label1=document.getElementById("label1");
let label2=document.getElementById("label2");
let label3=document.getElementById("label3");

let randomNumber1;
let randomNumber2;
let randomNumber3;

let min=5;
let max=6;

button.onclick=function(){
randomNumber1=Math.floor(Math.random()*max)+min;
randomNumber2=Math.floor(Math.random()*max)+min;
randomNumber3=Math.floor(Math.random()*max)+min;

label1.innerText=randomNumber1;
label2.innerText=randomNumber2;
label3.innerText=randomNumber3;


}