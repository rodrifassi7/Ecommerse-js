// import { controller } from "/js/controller.js";


// const productos = await controller();


const contenedor = document.getElementById("producto-contenedor");

let precioFinal = getLocalTotal() ? Number(getLocalTotal()) : 0;

let carrito1 = getLocalProductos() ? JSON.parse(getLocalProductos()) : [];

if (carrito1.length) {
  renderizarCarrito();
}

function getLocalTotal() {
  return localStorage.getItem("total");
}

function getLocalProductos() {
  return localStorage.getItem("productos");
}

function add(producto) {
  const p = productos.find((p) => p.id === producto);
  if (carrito1.find((p) => p.id === producto)) {
    carrito1.find((p) => p.id === producto).cantidad++;
  } else {
    carrito1.push(p);
  }
  localStorage.setItem("productos", JSON.stringify(carrito1));
  localStorage.setItem("total", Number(getLocalTotal()) + p.precio);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1300,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: `Se agrego ${p.nombre} 💸 al carrito de compras`,
  });

  renderizarCarrito();
}


const mostrarProductos =  () => {


  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card", "m-3");
    div.innerHTML = `    
        <div style="width: 18rem;">
            <img src='${producto.img}' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <a onClick="add(${producto.id})" id="addChapter" value='${producto.id}' class="btn btn-primary">Agregar al carrito</a>
                        <p class="mb-0">$ ${producto.precio}</p>
                    </div>
                </div>
        </div>
    `;

    contenedor.appendChild(div);
  });
}
mostrarProductos()


function renderizarCarrito() {
  const d = document;
  let carritoHTML = d.querySelector("#carrito");

  carritoHTML.innerHTML = "";
  const localCarrito = JSON.parse(getLocalProductos());

  if (!localCarrito || localCarrito.length === 0) {
    let producto = document.createElement("div");
    producto.classList.add("d-flex");
    producto.classList.add("justify-content-center");
    producto.classList.add("list");

    producto.innerHTML = `
            <p class="m-5"> Tu carrito esta vacio </p>
        `;
    carritoHTML.appendChild(producto);
  } else {
    localCarrito.forEach((p) => {
      let producto = document.createElement("div");

      producto.classList.add("col-12");
      producto.classList.add("col-md-4");
      producto.classList.add("mb-5");
      producto.classList.add("d-flex");
      producto.classList.add("justify-content-center");

      producto.innerHTML = `
            <div class="card text-dark" style="width: 18rem;">
                <div class="card-body">
                    <img class="card-img-top" src="${p.img}" alt="Card image cap">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p>$${p.precio}</p>
                    <p>Cantidad: ${p.cantidad}</p>

                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
            `;
      producto.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation();
        eliminarProductoDelCarrito(p.id);
      });

      carritoHTML.appendChild(producto);
    });
  }


  let total = document.createElement("div");
  total.innerHTML = `
        <p class="m-5" style="text-align: right;">Total: $ ${getLocalTotal() ? getLocalTotal() : 0
    }</p>
    `;
  carritoHTML.appendChild(total);
}

function openModal() {
  renderizarCarrito();
}

