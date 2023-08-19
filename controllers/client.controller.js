import { clientServices } from "../services/client-service.js";

const crearNuevaLinea = (url, categoria, nombre, precio, descripcion, id) => {
  const linea = document.createElement("div");
  linea.classList.add("starWars__galeria__box");
  const lista = document.createElement("ul");
  const item = document.createElement("li");

  const contenido = `
  <ul class="starWars__galeria__box__lista">
      <li class="starWars__galeria__box__lista__item-imagen">
              <img class="tarWars__galeria__box__lista__item-imagen__tamaño" src="${url}" id="${categoria}"></li>
      <li class="starWars__galeria__box__lista__item-titulo">
          <h3 id="${nombre}">${nombre}</h3>
      </li>
      <li class="starWars__galeria__box__lista__item-tsubtitulo">
          <h3>${precio}</h3>
      </li>
      <li class="starWars__galeria__box__lista__item-link"><a href="formularioProducto.html">Ver producto</a></li>
      <div class="starWars__galeria__box__lista__item-botones">
      <li class="starWars__galeria__box__lista__botones__item-button"><button id=${id}><img src="assets/img/icono-eliminar.png" width="20px" height="20px" title="Eliminar"></button></li>
      <li class="starWars__galeria__box__lista__botones__item-enlace"><a href="screens/FormularioProductoModificar.html?id=${id}&categoria=${categoria}"><img src="assets/img/icono-modificar.png" width="20px" title="Modificar"></a></li>
      </div>
  </ul>`;


  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    const categoria = linea.querySelector("img");
    const idCategoria = categoria.id;
    const nombre = linea.querySelector("h3");
    const idNombre = nombre.id;
    clientServices
      .eliminarCliente(id,idCategoria,idNombre)
      .then(respuesta => {
        console.log(respuesta);
      }).catch(err => alert("Ocurrió un error"));
  })
  return linea;
};
var producto = "";
var producto1 = document.querySelector("[data-product]");
var producto2 = document.querySelector("[data-product2]");
var producto3 = document.querySelector("[data-product3]");
// var producto3 = document.querySelector("[data-product3]");
// producto.classList.add("starWars__galeria");

// const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

clientServices.listaClientes1()
  .then((data) => {
    data.forEach(({ url, categoria, nombre, precio, descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(url, categoria, nombre, precio, descripcion, id);
      producto1.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
clientServices.listaClientes2()
  .then((data) => {
    data.forEach(({ url, categoria, nombre, precio, descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(url, categoria, nombre, precio, descripcion, id);
      producto2.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
clientServices.listaClientes3()
  .then((data) => {
    data.forEach(({ url, categoria, nombre, precio, descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(url, categoria, nombre, precio, descripcion, id);
      producto3.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));


