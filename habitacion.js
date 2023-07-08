function renderProductos (){

    fetch("productos.json")
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        let contenido = " ";

    datos.forEach(producto => {
        contenido += `<div class="col-md-4">
        <div class="card text-center border border-0" >
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            
            <p class="card-text text-success"><b>$${producto.precio}</b></p>
            <p class="text-secondary">${producto.nombre}</p>
            <p> <button class="btn btn-success" onClick="verProducto(${producto.id});"> Ver Producto </button></p>
                </div>
            </div>    
        </div>
      </div>`   
    });
    document.getElementById("contenido").innerHTML = contenido;
})}

function verProducto(id) {
    let productos = cargarProductosLS();
    let producto = productos.find (item=>item.id==id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href = "verProduct.html";
}

renderProductos();
renderBotonCarrito();