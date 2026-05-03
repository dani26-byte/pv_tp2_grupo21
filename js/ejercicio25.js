import {cambioColor} from "./funciones25.js";

const cambiar = document.querySelector("#boton1");

cambiar.addEventListener("click", () => {
    cambioColor();

    console.log("COLOR CAMBIADO");


});