import { reflejarTexto } from "./funciones22.js";

const campoTexto = document.querySelector("#campoTexto");
const textoReflejado = document.querySelector("#textoReflejado");

campoTexto.addEventListener("input", () => {
    reflejarTexto(campoTexto, textoReflejado);
});