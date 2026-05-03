export const actualizarTexto = (textoEntrada, textoCopia) => {
    const texto = textoEntrada.value;
    if (texto === "") {
        textoCopia.textContent = "Tu texto aparecera aqui...";
    } else {
        textoCopia.textContent = texto;
    }

    if (texto.length > 20) {
        textoCopia.classList.add("limite-superado");
    } else {
        textoCopia.classList.remove("limite-superado");
    }
};