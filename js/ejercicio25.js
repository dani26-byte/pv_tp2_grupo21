import { cambiarColorAleatorio } from "./funciones25.js";

const bntColor = document.querySelector("#bntColor");

bntColor.addEventListener("click", () => {
    cambiarColorAleatorio();
});