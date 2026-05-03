import { cambiarTexto } from "./funciones19.js";

const boton = document.getElementById("btnCambiar");
const parrafo = document.getElementById("texto");
const texto = "Estamos en la parte 2 del trabajo practico n°2 - Ejercicio 19";

boton.addEventListener("click", () =>{
    cambiarTexto(parrafo, texto);
});