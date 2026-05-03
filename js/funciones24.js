export const mostrarSeleccion = (seleccion, texto) => {
    texto.textContent = `Lenguaje seleccionado: ${seleccion}`;
    console.log(`Valor seleccionado en consola: ${seleccion}`);
};