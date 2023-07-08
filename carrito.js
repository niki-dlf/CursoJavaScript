function renderProductos() {
    let productos = cargarCarritoLS();
    let contenido = "";
   
    

    if(cantidadTotalProductos()>0){

        const btn = document.querySelector('#myBtn')
        btn.addEventListener('click', () => {
            Swal.fire({
                title: 'Genial!',
                text: '¿Continuar con el pago?',
                icon: 'success',
                confirmButtonText : 'Ok'
    })
    });


        contenido += `<table class="table">`;
        contenido += `<tr>
        <td colspan="3">&nbsp;</td>  
        <td class="text-end"><button class="btn bg-light btn-sm" onclick="vaciarCarrito();" title="Vaciar Carrito"> Vaciar Carrito X</button></td>
        </tr>`;


        productos.forEach (producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="90"> </td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle text-end"><b>${producto.cantidad} noche(s) x $${producto.precio}</b></td>
            <td class="align-middle text-end"><b>$${producto.cantidad * producto.precio}</b></td>
            <td class="align-middle text-end"> <img src="images/trash3.svg" alt="Eliminar producto" title="Eliminar producto" width="24" onclick="eliminarProducto(${producto.id});"></td>
            </tr>`;   
        });

        contenido += `<tr>
        <td>&nbsp;</td>
        <td colspan="2">Saldo total</td>
        <td class="text-end"><b>$${sumaTotalProductos()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;


    }else{ 

        const btn = document.querySelector('#myBtn')
            btn.addEventListener('click', () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No hay productos en el carrito'   
                })
        });

        contenido += `<div class="alert alert-success text-center" role="alert"> No hay productos en el carrito!</div>`;     
    }
    

    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();

