import { mostrarAlerta } from "./funciones20.js";

const boton = document.querySelector("#btnMostrar");

boton.addEventListener("click", () => {
    const nombreValor = document.querySelector("#nombre").value;
    const apellidoValor = document.querySelector("#apellido").value;
    const libretaValor = document.querySelector("#lu").value;

    mostrarAlerta(nombreValor, apellidoValor, libretaValor);
});