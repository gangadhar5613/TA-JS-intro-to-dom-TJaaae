let div = document.createElement("div");
div.classList.add("clock");


let divHour = document.createElement("div");
divHour.classList.add("hour");

let divHour1 = document.createElement("div");
divHour1.classList.add("hr");
divHour1.id = "hr";

divHour.append(divHour1);

let divMin = document.createElement("div");
divMin.classList.add("min");

let divMin1 = document.createElement("div");
divMin1.classList.add("mn");
divMin1.id = "mn";

divMin.append(divMin1);

let divSec = document.createElement("div");
divSec.classList.add("sec");

let divSec1 = document.createElement("div");
divSec1.classList.add("sc");
divSec1.id = "sc";

divSec.append(divSec1);


div.append(divHour);
div.append(divMin);
div.append(divSec);


let section = document.querySelector(".homeImage");
section.append(div);

let h1 = document.createElement("h1");

h1.innerText = "Analog Clock";
h1.classList.add("header");
section.prepend(h1);

let quote = document.createElement("q");
quote.innerText = "All we have to decide is what have to do with the time that is given to us."


section.append(quote);






const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;

    mn.style.transform = `rotateZ(${mm}deg)`;
    
    sc.style.transform = `rotateZ(${ss}deg)`;
})


