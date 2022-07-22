//Diseño la clase constructora de Productos en stock
class Producto{
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

//Creo el Array de productos con el constructor productos
const productos = [ 
    new Producto(1, "Licor de Dulce de Leche", 600, "licor"),
    new Producto(2, "Licor de Chocolate", 700, "licor"),
    new Producto(3, "Licor de Chocolate Blanco", 800, "licor"),
    new Producto(4, "Dulce de Frutilla", 350, "dulce"),
    new Producto(5, "Dulce de Manzana", 300, "dulce"),
    new Producto(6, "Dulce de Pera", 250, "dulce"),
]

let categorias = ["licor", "dulce"];

//Preparo array de productos en el carrito
let productosEnCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null) {
    let aux = categorias.join(", ");
    categoria = prompt('Ingrese una categoria para comprar o ingrese "salir": \n(' + aux + ")");

    if (categoria != "salir" && categoria != null) {
        let productosFiltradosPorCategoria = productos.filter((item) => item.categoria == categoria);

        let cartel = "";
        for (let i = 0; i < productosFiltradosPorCategoria.length; i++){
            cartel += "id:" + productosFiltradosPorCategoria[i].id +
            ", " + productosFiltradosPorCategoria[i].nombre +
            ", $" + productosFiltradosPorCategoria[i].precio + "\n";
        }
        let idSeleccionado = parseInt(prompt("Seleccione id del producto que desea comprar: \n\n" + cartel));

        let productoCarrito = productosFiltradosPorCategoria.find(item => item.id == idSeleccionado);

        if (productoCarrito){
            productosEnCarro.push(productoCarrito);
        }
    }

    console.log(productosEnCarro);
}
