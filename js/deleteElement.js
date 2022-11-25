function eliminarProductoDelCarrito(id) {
    if (carrito1.find((p) => p.id === id).cantidad === 1) {
  
          carrito1 = JSON.parse(getLocalProductos()).filter((p) => p.id != id);
          localStorage.setItem("productos", JSON.stringify(carrito1));
      
    } else {
      carrito1.find((p) => p.id === id).cantidad -= 1;
      localStorage.setItem("productos", JSON.stringify(carrito1));
    }
    localStorage.setItem(
      "total",
      getLocalTotal() - productos.find((p) => p.id === id).precio
    );
      
    renderizarCarrito();
  }


  