let input=document.getElementById("temp");
let button=document.getElementById("mybtn");
let ctof=document.getElementById("cTof");
let ftoc=document.getElementById("fToc");
let result=document.getElementById("result");
let temp;
function convert()
{
    if(ctof.checked)
    {
       temp=Number(input.value)
       temp=(temp*9/5)+32
        result.innerText = `${input.value} Celcius Is Equal To ${temp} Fahrenhiet`
   
    }else if(ftoc.checked)
    {
        temp = Number(input.value)
        temp =  5/9*(temp-32)
        result.innerText = `${input.value} Fahrenhiet Is Equal To ${temp} Celcius`
    }else{
        result.innerText="select the unit"
    }
}