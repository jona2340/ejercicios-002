let arreglo1 = [3, 5, 1];
let arreglo2 = [8, 2, 4];
let arreglo3 = [7, 6, 0];

let arregloCombinado = [...arreglo1, ...arreglo2, ...arreglo3];

let arregloOrdenado = arregloCombinado.sort((a, b) => a - b);

console.log(arregloOrdenado); 

