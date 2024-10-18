const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((total, numero) => {
     return total + numero;
}, 0);

console.log("Suma total: ", sumaTotal);