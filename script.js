"user Strict";

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1"); // use . for classes
// var color2 = document.querySelector(".color2");

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomNum = document.getElementById("random-numbers");

// Refactoring of code
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}
// Generate random rgba numbers for colour inputs
// function random_rgba() {
//   var o = Math.round,
//     r = Math.random,
//     s = 255;
//   return (
//     // random generator for rgb
//     "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")"
//     // random generator for rgba
//     // return ("rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) +")"
//   );
// }
// Set input color value on button click

// Generate random hex numbers
const getRandomHexColor = () => {
  // Define an array of hexadecimal digits
  const hexChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  // Generate an array of six random indices from 0 to 15
  const hexIndices = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16)
  );
  // Map each index to its corresponding hex digit and join them into a string
  const hexCode = hexIndices.map((i) => hexChars[i]).join("");
  // Return the string with a "#" prefix
  return `#${hexCode}`;
};
// Set input values on click
randomNum.addEventListener("click", function () {
  color1.value = getRandomHexColor();
  color2.value = getRandomHexColor();
  setGradient();
});
// The input event allows the tracking of changes in a input element
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
