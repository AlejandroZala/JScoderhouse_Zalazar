let producto = prompt("Ingrese tipo de Licor: \n\n1- Licor Dulce de Leche \n2- Licor de Chocolate \n3- Licor de Chocolate Blanco");

let formaPago = prompt("Ingrese forma de pago: \n\n1- Contado \n2- Tarjeta en 12 cuotas");

let cantidad = Number(prompt("Ingrese la cantidad de productos, número entero positivo."));

let productoSeleccionado;
let cantidadSeleccionada;
let precioVenta;
let precioLicorDulceLeche = 600;
let precioLicorChocolate = 700;
let precioLicorChocolateBlanco = 800;
let descuento1 = 10;
let descuento2 = 15;
let recargo = 40;

if (producto == 1){
        precio = precioLicorDulceLeche;
        productoSeleccionado = "Licor de Dulce de Leche";
} else if(producto == 2){
        precio = precioLicorChocolate;
        productoSeleccionado = "Licor de Chocolate";
} else if(producto == 3){
        precio = precioLicorChocolateBlanco;
        productoSeleccionado = "Licor de Chocolate Blanco";
} else {
    document.write("Ha ingresado una opción de PRODUCTO incorrecta, elija una opción válida.");
}

if (cantidad >= 0 && cantidad <=5) {
    porcentajeDescuento = 0;
} else if (cantidad > 5 && cantidad <=10){
    porcentajeDescuento = descuento1;
} else if ( cantidad > 10){
    porcentajeDescuento = descuento2;
} else if (cantidad < 0){
    document.write("Ha ingresado una CANTIDAD DE PRODUCTOS inválido, vuelva a ingresar un número correcto.");
}

if (formaPago == 1){
    porcentajeRecargo = 0;
} else if (formaPago == 2){
    porcentajeRecargo = recargo;
    cuotas = 12;
} else {
    document.write("Ha ingresado una opción de FORMA DE PAGO incorrecta, elija una opción válida.");
}

function calculoPrecioFinal(cantidad, precio, porcentajeRecargo, porcentajeDescuento) {
    return cantidad * precio * (1 + porcentajeRecargo/100) * (1 - porcentajeDescuento/100);
}

let precioFinal = calculoPrecioFinal(cantidad, precio, porcentajeRecargo, porcentajeDescuento);

function Venta(producto, cantidad, precioVenta){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precioVenta = precioVenta;
}

const nuevaVenta = new Venta(productoSeleccionado, cantidad, precioFinal);

console.log(nuevaVenta);

if (formaPago == 1){
    document.write("PRECIO TOTAL POR LA COMPRA = $" + precioFinal);
} else if (formaPago == 2) {
    document.write("PRECIO TOTAL POR LA COMPRA = $" + precioFinal + "  (12 CUOTAS DE  = $" + precioFinal/12 + ")");
}
