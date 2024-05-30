// precio inicial
const precio = 400000
const precioInicial = document.querySelector("#precio-inicial");
precioInicial.innerHTML = precio

// traer elementos del DOM
let agregarProducto = document.querySelector("#agregar");
let quitarProducto = document.querySelector("#quitar");
let cantidadArticulos = document.querySelector("#nro-articulos");
let valorTotal = document.querySelector("#valor-total");

// variables cantidad y precio
let cantidad = 0
let valorFinal = 0

// función agregar productos
agregarProducto.addEventListener("click",()=> {
    // al hacer click en agregar, aumentar la cantidad de productos en 1
    cantidad += 1
    // el precio final será la multiplicación de el "precio" (valor determinado por unidad) por el valor de "cantidad"
    valorFinal = precio * cantidad
    // imprimir en html la cantidad de artículos
    cantidadArticulos.innerHTML = cantidad
    // imprimir en html el precio final
    valorTotal.innerHTML = valorFinal
})

// función quitar productos
quitarProducto.addEventListener("click",()=> {
    // al hacer click en quitar, se reduce en 1 la cantidad de productos
    cantidad -= 1
    // el precio final será la resta del "precio" (valor determinado por unidad) al valor final
    valorFinal = valorFinal - precio
    // imprimir en html la cantidad de artículos
    cantidadArticulos.innerHTML = cantidad
    // imprimir en html el precio final
    valorTotal.innerHTML = valorFinal
})