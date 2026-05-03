import { sincronizarListas } from "./funciones21.js";

const listaPaises = document.querySelector("#listaPaises");
const listaCapitales = document.querySelector("#listaCapitales");

listaPaises.addEventListener("change", () => {
    sincronizarListas(listaPaises, listaCapitales);
});