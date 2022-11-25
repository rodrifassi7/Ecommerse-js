const botonBaratos = document.getElementById("menorPrecio");
botonBaratos.addEventListener("click", () => {
    const baratos = productos.sort((a, b) => a.precio - b.precio);
    console.log(baratos)

    contenedor.innerHTML = "";
    productos.forEach((producto) => {
        console.log(producto)
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
})





const botonCaros = document.getElementById("mayorPrecio");
botonCaros.addEventListener("click", () => {
    const caros = productos.sort((a, b) => b.precio - a.precio);
     contenedor.innerHTML = "";
    productos.forEach((producto) => {
        console.log(producto)
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
})
