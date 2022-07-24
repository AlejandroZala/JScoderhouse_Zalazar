//----CONFIGURACION LOCALSTORAGE---
let aux = localStorage.getItem('productosEnCarro');
let productosEnCarro = [];

if(!aux) {
    productosEnCarro = [];
    
}else{
    productosEnCarro = JSON.parse(aux);
    armadoProductosEnCarro();
}

//------------Armado de Lista de Productos en HTML---------------
function armadoListadoProductos() {
    let aux = '';
    for (let i=0; i < productos.length; i++){
        aux = 
            aux +  `
                <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                    <div class="card text-dark" style="width: 18rem;">
                        <img class="card-img-top" src="${productos[i].img}" alt="Card image cap">
                        <div class="card-body">
                            <h3>${productos[i].nombre}</h3>
                            <div>
                                <b>Precio: $${productos[i].precio}</b>
                                <p>id: ${productos[i].id}</p>
                                <button onclick="agregarAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}});" class="btn btn-primary" type="submit">Agregar al carro</button>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
        document.getElementById('tienda').innerHTML = aux;
    };
    
    armadoListadoProductos();


//---------FUNCIONES PARA EL CARRO-------------

function armadoProductosEnCarro() {
    let aux = '';
    for (let i=0; i < productosEnCarro.length; i++){
        aux = 
            aux +  `
                    <div class="card text-dark d-flex justify-content-center" style="width: 100%;">
                        <div class="cajaPrecioIdBoton">
                            <h5>${productosEnCarro[i].nombre}</h5>
                            <b>Precio: $${productosEnCarro[i].precio}</b>
                            <br>
                            <button onclick="borrarDelCarro(${i})" class="btn btn-primary" type="submit">Quitar del carro</button>
                        </div>
                    </div>
                `
            }
            document.getElementById('carrito').innerHTML = aux;
    };

function agregarAlCarro(producto){
    productosEnCarro.push(producto);
    localStorage.setItem('prodcutosEnCarro', JSON.stringify(productosEnCarro));
    armadoProductosEnCarro();
    const totalPagar = productosEnCarro.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

    precioFinalCompra = 
                document.getElementById("total").innerHTML = `
                        <h2 class="bg-primary" style="padding: 20px;">Precio Total de la Compra: $${totalPagar}</h2>
                        `
    }

function borrarDelCarro(id) {
    productosEnCarro.splice(id,1);
    localStorage.setItem('prodcutosEnCarro', JSON.stringify(productosEnCarro));
    armadoProductosEnCarro();
    const totalPagar = productosEnCarro.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

    precioFinalCompra = 
                document.getElementById("total").innerHTML = `
                        <h2 class="bg-primary" style="padding: 20px;">Precio Total de la Compra: $${totalPagar}</h2>
                        `
    }
