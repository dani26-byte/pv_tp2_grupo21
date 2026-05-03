export const reflejarTexto = (textoEntrada, textoCopia) => {
    if (textoEntrada.value === "") {
        textoCopia.textContent = "Tu texto aparecera aqui...";
    } else {
        textoCopia.textContent = textoEntrada.value;
    }
};