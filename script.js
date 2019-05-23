const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const css = document.querySelector('h3');
const body = document.querySelector('body');
const button = document.querySelector('button');

console.log(body);
console.log(color1);
console.log(color2);
setGradient();

function setGradient() {
    body.style.backgroundImage = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.backgroundImage + ";";
}

random();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", random);

function random(){
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}