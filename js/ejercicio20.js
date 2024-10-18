function calcularProducto(arr) {
    return arr.reduce((producto, num) => producto * num, 1);
}

let entrada = prompt("Ingresa los números separados por comas:");

let numeros = entrada.split(',').map(Number);

let productoTotal = calcularProducto(numeros);

console.log("El producto de los números es: " + productoTotal);
alert("El producto de los números es: " + productoTotal);
