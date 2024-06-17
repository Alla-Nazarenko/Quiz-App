console.clear();
//Select body//
const bodyElement = document.querySelector('[data-js="body"]');

//Select input//
const inputDarkmode = document.querySelector('[data-js="input-darkMode"]');
console.log(inputDarkmode);

//Select buttons//
const myLoggingButton = document.querySelector('[data-js="logging-button"]');
console.log(myLoggingButton);

const addDarkModeButton = document.querySelector('[data-js="adding-button"]');
console.log(addDarkModeButton);

const removeDarkModeButton = document.querySelector(
  '[data-js="removing-button"]'
);
console.log(removeDarkModeButton);

const toggleDarkModeButton = document.querySelector(
  '[data-js="toggling-button"]'
);
console.log(toggleDarkModeButton);

//Algorithm for input//
inputDarkmode.addEventListener("input", () => {
  bodyElement.classList.toggle("dark-mode");
  console.log("You inputed");
});

//Algorithm for buttons//

myLoggingButton.addEventListener("click", () => {
  console.log("You clicked a button!");
});

addDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark-mode");
  console.log("You added dark mode!");
});

removeDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark-mode");
  console.log("You removed dark mode!");
});

toggleDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  console.log("You toggled dark mode!");
});
