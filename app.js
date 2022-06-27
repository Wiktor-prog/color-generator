const colors = ["blue", "green", "yellow", "orange", "yellow",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); 

btn.addEventListener("click", function(){
const randomnumber = GetRandomNumber();
console.log(randomnumber);
document.body.style.backgroundColor = colors[randomnumber]
color.textContent = colors[randomnumber]
});
function GetRandomNumber() {
return Math.floor(Math.random() * colors.length);
}