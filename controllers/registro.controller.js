import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.getElementById('grupo').value; //capturar con un select
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value; 
    clientServices
    .crearCliente1( url,categoria,nombre,precio,descripcion )
    .then(() => {
        window.location.href = "./index.html";
    })
    .catch(err => console.log(err));
});