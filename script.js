"use strict";

const incrementBtn = document.getElementById("increment-btn");
const countDisplay = document.getElementById("count-display");

// piece of data that we are tracking
let currentCount = 0;

incrementBtn.addEventListener("click", () => {
  currentCount++;
  // updating the DOM
  countDisplay.innerText = currentCount;
});
