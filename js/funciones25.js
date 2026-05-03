
const colores = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFF5", "#F5FF33", "#FF8C33", "#8C33FF"];
export const cambioColor = () => {
   
    let indiceColor = Math.floor(Math.random() * colores.length);
    
    document.body.style.backgroundColor = colores[indiceColor];
};


