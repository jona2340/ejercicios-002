function encontrarIndice(arr, valor) {
    let indice = arr.indexOf(valor);
    return indice;
}

let arreglo = [10, 20, 30, 40, 50];
let valor = 30;

let resultado = encontrarIndice(arreglo, valor);
console.log(resultado);

let valorNoExiste = 100;
let resultado2 = encontrarIndice(arreglo, valorNoExiste);
console.log(resultado2);
