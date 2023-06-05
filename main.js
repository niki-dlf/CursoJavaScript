class Carrito {
    constructor() {
        this.productos = []
    }

    agregarProducto(nombreProducto, precioProducto,noches) {
        this.productos.push({id:this.generarId(), nombre:nombreProducto.toLocaleUpperCase(), precio:precioProducto,noches:noches});
        console.log("Agregaste un Producto!");
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(item => item.id != id);
        console.log("Eliminaste un Producto!");
    }

    totalProductos() {
        return this.productos.length;
    }

    sumaTotal() {
        let total = 0;
        let porcentaje=0.1;
        
        this.productos.forEach(item => {
            total += item.precio * item.noches; 
        });
        if (total > 5000){
            total = total - (total*porcentaje);
        }
        return total;
        return this.productos.reduce((total, item) => total += item.precio*item.noches, 0);
    }
    
    generarId() {
        let max = 0;

        this.productos.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    listarProductos() {
        let contenido = "Productos agregados:\n\n";

        this.productos.forEach(item => {
            contenido += `${item.id} -Habitación ${item.nombre} $${item.precio} por ${item.noches} noches\n` 
        });

        return contenido;
    }
}
     
let nombre = "";
let precio = 0;
let noches= 0;
const carrito = new Carrito();

// Agregar Productos
while (nombre.toLocaleUpperCase() != "ESC") {
    nombre = prompt("Ingrese el tipo de habitación:\nDoble \nTriple  \nCuadruple \n Ingrese ESC para finalizar la compra");
    if (nombre.toLocaleUpperCase() == "ESC") {
        break;
    } else if (nombre.toLocaleUpperCase()== "DOBLE"){
    precio = 200
    } else if (nombre.toLocaleUpperCase()== "TRIPLE"){
    precio = 300
    } else if (nombre.toLocaleUpperCase()== "CUADRUPLE"){
    precio = 400
    }
    noches= parseFloat (prompt("Ingrese la cantidad de nohces de su estadía"));
    carrito.agregarProducto(nombre, precio,noches);
}



// Validar si mi Carrito tiene Productos
if (carrito.totalProductos() > 0) {
    let id;

    // Eliminar Productos
    while (id != 0) {
        id = parseInt(prompt(carrito.listarProductos() + "\n PARA FINALIZAR LA COMPRA ESCRIBA 0 \n Si desea eliminar un producto ingrese el ID del mismo:\n"));
        
        if (id > 0) {
            carrito.eliminarProducto(id);
        }
    
        if (carrito.totalProductos() == 0) {
            break;
        }
    }



    // Informo el Total de Productos agregados
    alert(`${carrito.listarProductos()}\nTotal a Pagar: $${carrito.sumaTotal()}\n ¡Las compras superiores a $5000 tienen un 10% de descuento!`);
} else {
    alert("No se encontraron productos agregados en el carrito!");
}