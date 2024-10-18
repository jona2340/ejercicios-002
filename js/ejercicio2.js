
const valores = [1,3,8,2,7,10,23,4];
 
const valorMasAlto= Math.max(...valores);

const valorMasAltoIndex = valores.findIndex((v) => v === valorMasAlto);
 
console.log(
  `El valor mas alto es`,valorMasAlto);
