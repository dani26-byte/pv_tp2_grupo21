import { actualizarTexto } from "./funciones23.js";

const campoTexto = document.querySelector("#campoTexto");
const textoReflejado = document.querySelector("#textoReflejado");

campoTexto.addEventListener("input", () => {
    actualizarTexto(campoTexto, textoReflejado);
});