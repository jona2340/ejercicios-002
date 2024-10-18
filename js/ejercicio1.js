function sumarElementos(arreglo) {  
    let suma = 0;
    arreglo.forEach(function(numero) {  
      suma += numero; 
    });
    return suma;  
  }
  const numeros = [1,1,1,1]; 
  console.log(sumarElementos(numeros)); 
  