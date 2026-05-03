const colores = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#33FFF0", "#FFE633", "#FF33A1", "#33D4FF"];
let colorActual = "";

export const cambiarColorAleatorio = () => {
    let colorElegido;

    do {
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        colorElegido = colores[indiceAleatorio];
    } while (colorActual === colorElegido);

    colorActual = colorElegido;
    
    document.body.style.backgroundColor = colorElegido;
    console.log(`El color de fondo cambio a: ${colorElegido}`);
};