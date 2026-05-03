import { mostrarParrafo } from "./funciones23.js";

const texto = document.querySelector("#ingTex");

texto.addEventListener("input", () => {
    const value = texto.value.toUpperCase();
    mostrarParrafo(value);
});