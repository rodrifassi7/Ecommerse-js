import { controller } from "/js/controller.js";


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