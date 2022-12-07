import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
    console.log(input.target);
  });
});