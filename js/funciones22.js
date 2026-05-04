export const mostrarTexto = () => {
    const input = document.querySelector("#entrada");
    const resultado = document.querySelector("#resultado");

    resultado.textContent = input.value;
};