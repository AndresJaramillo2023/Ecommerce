//Abrir http(método,url)

//CRUD   - Métodos HTTP
//Create - POST
//Read   - GET
//Upddate- PUT/PATCH
//Delete - DELETE
//FeTch API
const listaClientes1 = () => fetch("https://fake-api-pi.vercel.app/perfil").then((respuesta) => respuesta.json());
const listaClientes2 = () => fetch("https://fake-api-pi.vercel.app/perfil2").then((respuesta) => respuesta.json());
const listaClientes3 = () => fetch("https://fake-api-pi.vercel.app/perfil3").then((respuesta) => respuesta.json());


var crearCliente1 = "";
crearCliente1 = (url, categoria, nombre, precio, descripcion) => {
  switch (categoria) {
    case 'Star Wars':
      return fetch("https://fake-api-pi.vercel.app/perfil", { //informaciòn del perfil especìfico que quiero recibir
        method: "POST", //metodo poner
        headers: {
          "Content-Type": "application/json", //tipo de archivo
        },
        body: JSON.stringify({ url, categoria, nombre, precio, descripcion, id: uuid.v4() }) //información a enviar
      });
      break;
    case 'Consolas':
      return fetch("https://fake-api-pi.vercel.app/perfil2", { //informaciòn del perfil especìfico que quiero recibir
        method: "POST", //metodo poner
        headers: {
          "Content-Type": "application/json", //tipo de archivo
        },
        body: JSON.stringify({ url, categoria, nombre, precio, descripcion, id: uuid.v4() }) //información a enviar
      });
      break;
    case 'Diversos':
      return fetch("https://fake-api-pi.vercel.app/perfil3", { //informaciòn del perfil especìfico que quiero recibir
        method: "POST", //metodo poner
        headers: {
          "Content-Type": "application/json", //tipo de archivo
        },
        body: JSON.stringify({ url, categoria, nombre, precio, descripcion, id: uuid.v4() }) //información a enviar
      });
      break;
    default:
      alert("Error, en client-service.js");
      break;
  }

};


var eliminarCliente = (id, idCategoria, idNombre) => {
  var variable = "";
  var respuestaUsuario = "";
  switch (idCategoria) {
    case 'Star Wars':
      respuestaUsuario = confirm("¿Vas a eliminar el siguiente producto? \n Categoria: " + idCategoria + "\n Id: " + id + "\n Nombre: " + idNombre);
      if (respuestaUsuario) {
        variable = 'perfil';
        return fetch(`https://fake-api-pi.vercel.app/${variable}/${id}`, {
          method: "DELETE",

        })
      }
      break;
    case 'Consolas':
      respuestaUsuario = confirm("¿Vas a eliminar el siguiente producto? \n Categoria: " + idCategoria + "\n Id: " + id + "\n Nombre: " + idNombre);
      if (respuestaUsuario) {
        variable = 'perfil2';
        return fetch(`https://fake-api-pi.vercel.app/${variable}/${id}`, {
          method: "DELETE",

        })
      }
      break;
    case 'Diversos':
      respuestaUsuario = confirm("¿Vas a eliminar el siguiente producto? \n Categoria: " + idCategoria + "\n Id: " + id + "\n Nombre: " + idNombre);
      if (respuestaUsuario) {
        variable = 'perfil3';
        return fetch(`https://fake-api-pi.vercel.app/${variable}/${id}`, {
          method: "DELETE",

        })
      }
      break;
    default:
      alert("Error,  en Client controller")
      break;
  }
}
var eliminarClienteSimple = (id, idCategoria, idNombre) => {
  var variable1 = "";
  var respuestaUsuario1 = "";
  switch (idCategoria) {
    case 'Star Wars':
      variable1 = 'perfil';
      break;
    case 'Consolas':
      variable1 = 'perfil2';
      break;
    case 'Diversos':
      variable1 = 'perfil3';
      break;
    default:
      alert("Error,  en Client controller")
      break;
  }

  return fetch(`https://fake-api-pi.vercel.app/{variable1}/${id}`, {
    method: "DELETE",

  }).then(alert("Producto eliminado satisfactoriamente"));
}

const detalleCliente = (id,categoria) => {
  var variablePerfil = "";
  switch (categoria) {
    case 'Star Wars':
      variablePerfil = 'perfil';
      break;
    case 'Consolas':
      variablePerfil = 'perfil2';
      break;
    case 'Diversos':
      variablePerfil = 'perfil3';
      break;
    default:
      alert("Hay un error en client service en el SWITCH")
      break;
  }

  return fetch(`https://fake-api-pi.vercel.app/${variablePerfil}/${id}`).then((respuesta) =>
    respuesta.json())
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

const actualizarCliente = (url, categoria, nombre, precio, descripcion, id) => {
  var perfil = "";
  switch (categoria) {
    case 'Star Wars':
    perfil = 'perfil';
      break;
    case 'Consolas':
      perfil = 'perfil2';
      break;
    case 'Diversos':
      perfil = 'perfil3';
           break;
    default:
      alert("Error, en actualizar cliente");
      break;
  }
  return fetch(`https://fake-api-pi.vercel.app/${perfil}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, categoria, nombre, precio, descripcion, id})
      })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
}



export const clientServices = {
  listaClientes1,
  listaClientes2,
  listaClientes3,
  crearCliente1,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
  eliminarClienteSimple,
};
