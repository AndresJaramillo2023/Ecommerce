import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const cat = url.searchParams.get("categoria");

    if (id === null) {
        window.location.href = "./Error.html";
    }

    const varUrl = document.querySelector("[data-url]");
    var varGrupo = document.querySelector("[data-grupo]");
    const varNombre = document.querySelector("[data-nombre]");
    const varPrecio = document.querySelector("[data-precio]");
    const varDescripcion = document.querySelector("[data-descripcion]");
    // alert("PERFIL CATEGORIA OBTENER INFORMACIÓN: " + categoria);


    try {
        const perfil = await clientServices.detalleCliente(id, cat);
        // console.log(perfil);
        if (perfil.url && perfil.categoria && perfil.nombre && perfil.precio && perfil.descripcion) {
            varUrl.value = perfil.url;
            varGrupo.value = cat;
            varNombre.value = perfil.nombre;
            varPrecio.value = perfil.precio;
            varDescripcion.value = perfil.descripcion;
        } else {
            throw new Error(); //Activamos el error
        }
    } catch (error) {
        alert("Errores al precargar los datos en el archivo actuliazar.controller.js")
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const cate = url.searchParams.get("categoria");

    const varUrl = document.querySelector("[data-url]").value;
    const categoria = document.getElementById('grupo').value; //capturar con un select
    const varNombre = document.querySelector("[data-nombre]").value;
    const varPrecio = document.querySelector("[data-precio]").value;
    const varDescripcion = document.querySelector("[data-descripcion]").value;
    // alert("Estamos en ACTULIZAR INFORMACION EL METODO")
    // alert("url: " + varUrl);
    // alert("categoria: " + categoria);
    // alert("cat: " + cat);
    // alert("nombre: " + varNombre);
    // alert("precio: " + varPrecio);
    // alert("descripcion: " + varDescripcion);
    // alert("id: " + id);
    // window.location.href = "./Registro producto concluido.html";
    // alert(" REGISTRO DE PRODUCTO ACTUALIZADO ");


    if (cate != categoria) {
        clientServices.eliminarClienteSimple(id, cate, varNombre);
        clientServices
        .crearCliente1(varUrl, categoria, varNombre, varPrecio, varDescripcion)
        .then(() => {
            window.location.href = "./index.html";
        })
       .catch(err => console.log(err));
       window.location.reload()
    } else {
        clientServices.actualizarCliente(varUrl, categoria, varNombre, varPrecio, varDescripcion, id).then(() => {
        window.location.href = "./index.html";
        });
    }
});
