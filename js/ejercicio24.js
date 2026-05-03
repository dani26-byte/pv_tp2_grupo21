import { mostrarSeleccion } from "./funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector("#resultado");

radios.forEach((radio) => {
    radio.addEventListener("change", (evento) => {
        const valorElegido = evento.target.value;
        mostrarSeleccion(valorElegido, resultado);
    });
});