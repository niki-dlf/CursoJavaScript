function renderProducto (){
    const producto = JSON.parse (localStorage.getItem ("producto"));
    let contenido = `<div class="col-md-4 offset-md-2">
    <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
    </div>
    <div class="col-md-4">
        <h3 class="text-secondary">${producto.nombre}</h3>
        <h4 class="card-text text-success"><b>$${producto.precio}</b></h4> 
        <p class="text-success">${producto.noche}</p>   
        <button class="btn btn-success" onclick="agregarProducto(${producto.id});">Agregar noche</button>
    </div>`

    document.getElementById("contenido").innerHTML = contenido;

}

renderProducto();
renderBotonCarrito();