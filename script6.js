const button = document.querySelector("#myButton");
const count = document.querySelector("#count");
let i = 0;

button.addEventListener("click", function () {
    i++;
    count.textContent = i + " КЛИКОВ"
}) 


const count2 = document.querySelector("#count");

const div = document.querySelector("#myDiv"); 

div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "lightgreen";
});

div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "lightblue";
});

const div2 = document.querySelector("#myDiv2"); 

div2.addEventListener("mouseover", function () {
    div2.style.backgroundColor = "yellow";
});
    
div2.addEventListener("mouseout", function () {
   div2.style.backgroundColor = "blue";
});

const div3 = document.querySelector("#myDiv3"); 

div3.addEventListener("mouseover", function () {
    div3.style.backgroundColor = "white";
});
        
div3.addEventListener("mouseout", function () {
    div3.style.backgroundColor = "rgb(177, 23, 62)";
});


const p = document.querySelector("#yui"); 

p.addEventListener("mouseover", function () {
    p.style.backgroundColor = "purple";
});

p.addEventListener("mouseout", function () {
    p.style.backgroundColor = "red";
});