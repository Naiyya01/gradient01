var code= document.querySelector("h4");
var color1= document.querySelector('#color1');
var color2= document.querySelector('#color2');
var color3= document.querySelector('#color3');
var gradient= document.getElementById('#gradient');
var Lgrad= document.querySelector("#Lgrad-type");
var Rgrad= document.querySelector("#Rgrad-type");
var typeGrad= 't';

function setGradient(){
    if(Lgrad.value!=='#'){
        gradient.style.background= "linear-gradient("
           + Lgrad.value
           + ','
           + color1.value
           + ','
           + color2.value
           + ','
           + color3.value
       + ")";
    }
    else {
        gradient.style.background= "radial-gradient("
        + Rgrad.value
        + ','
        + color1.value
        + ','
        + color2.value
        + ','
        + color3.value
    + ")";
    }
    
}

color1.addEventListener("input" , setGradient);
color2.addEventListener("input" , setGradient);
color3.addEventListener("input" , setGradient);
Lgrad.addEventListener("input" , setGradient);
Rgrad.addEventListener("input" , setGradient);