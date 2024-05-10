// Lista de productos de la tienda NIKE.

let productos = {
    '1': {'nombre': 'Remera Jordan Jumpman', 'precio': 45999}, 
    '2': {'nombre': 'Remera Jordan Flight Heritage 85', 'precio': 69999}, 
    '3': {'nombre': 'Buzo Nike Sportswear Tech Fleece Windrunner', 'precio': 197999},
    '4': {'nombre': 'Buzo Nike Club', 'precio': 101499},
    '5': {'nombre': 'Pantalón Jordan Essentials', 'precio': 139999},
    '6': {'nombre': 'Pantalón Nike Sportswear Club', 'precio': 86499},
    '7': {'nombre': 'Zapatillas Nike Air Force 1 07', 'precio': 209999},
    '8': {'nombre': 'Zapatillas Air Jordan 1 Low', 'precio': 209999},
    '9': {'nombre': 'Campera Nike Sportswear Tech Fleece Windrunner', 'precio': 197999},
    '10': {'nombre': 'Campera Nike Sportswear Trend', 'precio': 180249}, 
};


let carrito = {};

// Funciones del carrito
function mostrarProductos() {
    let mensaje = 'Productos disponibles:\n';
    for (let numero in productos) {
        mensaje += numero + ': ' + productos[numero].nombre + ' - $' + productos[numero].precio + ' \n';
    }
    alert(mensaje);
}

function agregarAlCarrito() {
    let seguirAgregando = 's';
    while (seguirAgregando.toLowerCase() === 's') {
        mostrarProductos();
        let numeroProducto = prompt('Introduce el número del producto que te gustaría agregar al carrito:');
        let cantidad = parseInt(prompt('¿Cuántas unidades te gustaría agregar?'));

        if (productos[numeroProducto] !== undefined) {
            let producto = productos[numeroProducto].nombre;
            if (carrito[producto] === undefined) {
                carrito[producto] = cantidad;
            } else {
                carrito[producto] += cantidad;
            }
            alert('Has agregado ' + cantidad + ' ' + producto + '(s) a tu carrito.');
        } else {
            alert('Lo siento, ese producto no está disponible.');
        }
        seguirAgregando = prompt('¿Deseas agregar otro producto al carrito? (s/n)');
    }
}

function verCarrito() {
    let mensaje = 'Tu carrito:\n';
    for (let producto in carrito) {
        mensaje += producto + ': ' + carrito[producto] + '\n';
    }
    alert(mensaje);
}

function calcularTotal() {
    let total = 0;
    for (let producto in carrito) {
        for (let numero in productos) {
            if (productos[numero].nombre === producto) {
                total += carrito[producto] * productos[numero].precio;
            }
        }
    }
    alert('Tu total es: $' + total.toFixed(2) + ' pesos.');
}

// Llamadas a las funciones
agregarAlCarrito();
verCarrito();
calcularTotal();