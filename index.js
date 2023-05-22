document.body.style.backgroundColor="silver";
document.getElementById("title").style.color="green";
document.getElementById("title").style.textAlign ="center";
document.getElementById("title").style.fontSize="40px";

document.getElementById("heading_three").style.textTransform ="uppercase";

let anotherFruit= document.createElement("li");
anotherFruit.innerHTML = "Apple";
document.getElementById("fruList").appendChild(anotherFruit);


let anotherVeg = document.createElement("li")
anotherVeg.innerHTML = "Carrot";
document.getElementById("vegList").appendChild(anotherVeg);
