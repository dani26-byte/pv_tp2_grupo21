export const mostrarParrafo= (ingresado) => {
    const textoResultado = document.querySelector("#resultado");
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1"];
    let indiceColor = 0;
    if (ingresado === "") {
        textoResultado.textContent = "Esperando que escribas...";
    } else {
        if ((ingresado.length <= 20) || (ingresado.length === "")) {
            textoResultado.textContent = ingresado;
            textoResultado.style.backgroundColor = "transparent";
        } else {
            textoResultado.textContent = ingresado;
            let cantidadCaracteres = ingresado.length;
            let indiceColor = Math.floor(cantidadCaracteres / 20) % colores.length;
            textoResultado.style.backgroundColor = colores[indiceColor];
        }
    }
};