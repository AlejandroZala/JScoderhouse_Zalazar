//Creo el Array de productos con el constructor productos


const licores = [ 
    new Producto(1, "../imagenes/licor_dulce_leche.png", "Licor de Dulce de Leche", 500, 600, 50),
    new Producto(2, "../imagenes/licor_chocolate.png", "Licor de Chocolate", 500, 700, 60),
    new Producto(3, "../imagenes/licor_chocolate_blanco.png", "Licor de Chocolate Blanco", 500, 800, 60),
]

const dulces = [ 
    new Producto(4, "../imagenes/dulce_frutilla.png", "Dulce de Frutilla", 250, 450, 50),
    new Producto(5, "../imagenes/dulce_frambuesa.png", "Dulce de Frambuesa", 250, 550, 70),
    new Producto(6, "../imagenes/dulce_frutos_bosque.png", "Dulce de Frutos del Bosque", 250, 650, 40),
]

const productos = [...licores, ...dulces]