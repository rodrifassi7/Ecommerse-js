let menssage = `Bienvenido, que desea comprar?\n${allProducts
    .map(
        (producto, index) => `${index + 1}: ${producto.nombre} $${producto.precio}`
    )
    .join("\n")}`;

let seguirComprando = true;

while(seguirComprando){


let productChoice = Number(prompt(menssage));

const solicitarProducto = () => {
    switch (productChoice) {
        case 1:
            return producto1;
        case 2:
            return producto2;
        case 3:
            return producto3;
        case 4:
            return producto4;
        case 5:
            return producto5;
        case 6:
            return producto6;
        case 0:
            alert("Gracias, vuelva prontos");
            break;
    }
}

let productoNombre = solicitarProducto().nombre
let productoPrecio = solicitarProducto().precio


    while (isNaN(productChoice) || productChoice > 6) {
        productChoice = Number(prompt(menssage));
    }

    let cantidadProducto = Number(prompt("Cuantos " + productoNombre + " vas a querer"))
    carritoDeCompras.push({ productoNombre, cantidadProducto, productoPrecio })

    seguirComprando


carritoDeCompras.forEach((carritoTotal) => {
    alert(
        `Usted compro ${carritoTotal.cantidadProducto} unidades de ${carritoTotal.productoNombre} y el precio total es de  $${carritoTotal.cantidadProducto * productoPrecio
        }`
    );
});
seguirComprando =(prompt(`Desea seguir comprando?
1: Si
2:No`
))
if(seguirComprando == 2){
    alert("Gracias, aqui esta su monto total")
    seguirComprando = false;
}

}


const pagoTotal = carritoDeCompras.reduce((acc, el) => acc + el.cantidadProducto * el.productoPrecio, 0)
alert(`El total a pagar  es de  $${pagoTotal}`)




