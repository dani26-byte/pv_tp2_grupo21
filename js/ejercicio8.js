const notas = [3, 5, 2, 8, 1, 7, 8, 6, 10, 7];

for (let i = 0; i < notas.length; i++) {
    console.log(`La nota en la posicion ${i+1} es: ${notas[i]}`);
}
let notaAprobadas = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        notaAprobadas.push(notas[i]);
    }
}
console.log(`Las notas aprobadas son: ${notaAprobadas}`);
let notaDesaprobadas = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        notaDesaprobadas.push(notas[i]);
    }
}
console.log(`Las notas desaprobadas son: ${notaDesaprobadas}`);

let sumaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}
const promedioNotas = sumaNotas / notas.length;
console.log(`El promedio de las notas es: ${promedioNotas}`);

const contadorNotasAprobadas = notaAprobadas.length;

console.log(`La cantidad de notas aprobadas es: ${contadorNotasAprobadas}`);