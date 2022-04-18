"use strict";

const colorChanger = document.querySelector(".color");
const btn = document.querySelector("#btn");

const colorgenerator = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn.addEventListener("click", colorChange);

function colorChange(e) {
  let colorCode = colorgenerator();
  document.body.style.backgroundColor = colorCode;
  colorChanger.textContent = colorCode;
  e.preventDefault();
}
