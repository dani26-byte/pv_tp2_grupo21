import { mostrarParrafo } from "./funciones24.js";

const texto = document.querySelector("#programa");
const texto2 = document.querySelector("#poo");
const texto3 = document.querySelector("#base");

texto.addEventListener("input", () => {
    const value = texto.value.toUpperCase();
    mostrarParrafo(1);
});

texto2.addEventListener("input", () => {
    const value = texto2.value.toUpperCase();
    mostrarParrafo(2);
});

texto3.addEventListener("input", () => {
    const value = texto3.value.toUpperCase();
    mostrarParrafo(3);
});