const container = document.getElementById("container");
const card = document.getElementById("card");

const browserWidth = document.documentElement.clientWidth;
const browserHeight = document.documentElement.clientHeight;

var x = 0;
var y = 0;

container.addEventListener("mousemove", (e) => {
  var posX = e.clientX;
  var posY = e.clientY;

  x = (posX - browserWidth / 2) / 80;
  y = (browserHeight / 2 - posY) / 80;

  console.log(`💀 X = ${x}`);
  console.log(`💀 Y = ${y}`);
  card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});
