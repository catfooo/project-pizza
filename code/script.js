console.log("hello");
const img = document.createElement("img");
img.src = "./assets/bot.png";
img.style.width = "777px"
img.style.height = "777px"
const bildContainer = document.getElementById("bild-container");
bildContainer.appendChild(img);
img.addEventListener('mouseover', function() {
  img.style.cursor = 'pointer';
});
img.addEventListener("click", function() {
  alert("bilden har klickats!");
});