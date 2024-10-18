function contarValor(arr, valorBuscado) {
    return arr.reduce((contador, valorActual) => {
        return valorActual === valorBuscado ? contador + 1 : contador;
    }, 0);
}

let arreglo = [1, 2, 3, 2, 4, 2, 5];
let valorAContar = 2;

let cantidad = contarValor(arreglo, valorAContar);
console.log(`El valor ${valorAContar} aparece ${cantidad} veces.`); 

