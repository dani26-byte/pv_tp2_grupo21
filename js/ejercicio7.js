const nombres = ["Juan", "Ana", "María", "angelina", "micaela"];
let nombreMenor = nombres[0];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length < nombreMenor.length) {
        nombreMenor = nombres[i];
    }
}
console.log(`el nombre con menor cantidad de caracteres es: ${nombreMenor}`);