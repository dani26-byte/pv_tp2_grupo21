const hora=15;
const minutos=30;

const horaEnMinutos= hora * 60;
const tiempoTotalEnMinutos= horaEnMinutos + minutos;
const totalEnSegundos= tiempoTotalEnMinutos * 60;

console.log(`La hora es ${hora}:${minutos} en segundos es: ${totalEnSegundos} segundos`);