const edades =[8, 9, 10, 34, 45, 18, 23, 57];
let sumaEdades = 0; 
for (let i = 0; i < edades.length; i++) {
    
    console.log(`La edad en la posicion ${i} es: ${edades[i]}`); 
    sumaEdades += edades[i];     
}
const promedioEdades = sumaEdades / edades.length;
console.log(`El promedio de las edades es: ${promedioEdades}`);