//----CONFIGURACION LOCALSTORAGE---
let aux = localStorage.getItem('productosEnCarro');
let productosEnCarro = [];


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
                            <h3 style="height: 60px">${productos[i].nombre}</h3>
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

if(!aux) {
    productosEnCarro = [];
    
}else{
    productosEnCarro = JSON.parse(aux);
    armadoProductosEnCarro();
}

function manejeElClick() {
    Swal.fire({
    title: 'El pago fué realizado con éxito!',
    text: 'Muchas gracias por su compra!',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    });
 }

function armadoProductosEnCarro() {
    let aux = '';
    for (let i=0; i < productosEnCarro.length; i++){
        aux = 
            aux +  `
                    <div class="card text-dark d-flex justify-content-center" style="width: 100%;">
                        <div class="cajaPrecioIdBoton">
                            <h5>${productosEnCarro[i].nombre}</h5>
                            <h5>Precio: $${productosEnCarro[i].precio}</h5>
                            <button onclick="borrarDelCarro(${i})" class="btn btn-warning" type="submit">Quitar del carro</button>
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
                <div class="cajaCompraTotal">
                    <div>
                        <h4>Total de la Compra:</h4>
                        <h4>Precio: $${totalPagar}</h4>
                    </div>
                    <div>
                        <h4>Un pago de: $${totalPagar}</h4>
                        
                    </div>
                    <div>
                        <button onclick="manejeElClick()" class="btn btn-danger">CONFIRMAR LA COMPRA</button>   
                    </div>
                </div>
                `
    }

function borrarDelCarro(id) {
    productosEnCarro.splice(id,1);
    localStorage.setItem('prodcutosEnCarro', JSON.stringify(productosEnCarro));
    armadoProductosEnCarro();
    const totalPagar = productosEnCarro.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

    precioFinalCompra = 
                document.getElementById("total").innerHTML = `
                <div class="cajaCompraTotal">
                    <div>
                        <h4>Total de la Compra:</h4>
                        <h4>Precio: $${totalPagar}</h4>
                    </div>
                    <div>
                        <button onclick="manejeElClick()" class="btn btn-danger">CONFIRMAR LA COMPRA</button>   
                    </div>
                </div>
                `
    }
