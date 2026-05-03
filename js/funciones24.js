export const mostrarParrafo= (num) => {
    const textoResultado = document.querySelector("#resultado");

    if (num === 1) {
        textoResultado.textContent = "Programacion visual";
    } else if (num === 2) {
        textoResultado.textContent = "Programacion orientada a objetos";
    } else {
        textoResultado.textContent = "Base de datos";
    }
};