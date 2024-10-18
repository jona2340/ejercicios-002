function estaVacio(arr) {
    return !arr.some(() => true);
}

let arreglo1 = [];
let arreglo2 = [1, 2, 3];

console.log(estaVacio(arreglo1));
console.log(estaVacio(arreglo2)); 
