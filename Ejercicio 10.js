
let totalcompra = 120000;
let esCliente = true;
let descuento = 0; 
 
if (totalcompra > 100000) {
  if (esCliente) {
    descuento = 20;
  } else {
    descuento = 10;
  }
} else {
  if (esCliente) {
    descuento = 5;
  } else {
    descuento = 0;
  }
}
 
let valorDescuento = totalcompra * (descuento / 100);
let totalFinal = totalcompra - valorDescuento;
 
console.log("Descuento aplicado: " + descuento + "%");
console.log("Total final a pagar: " + totalFinal);