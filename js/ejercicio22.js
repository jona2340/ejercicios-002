let arreglo = [0, "Hola", false, true, "", null, undefined, "JavaScript", NaN, 42];

let valoresTruthy = arreglo.filter(valor => Boolean(valor));

console.log(valoresTruthy); 