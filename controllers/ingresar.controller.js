import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const varEmail = document.querySelector("[data-email]").value; //obtengo del formulario
    const varClave = document.querySelector("[data-clave]").value;
    const usuarios = await clientServices.detalleUsuario(varEmail,varClave);
    // console.log(usuarios);
    usuarios.forEach(element => {
        console.log(element.email)
        switch(element.email+element.clave){
            case varEmail+varClave:
                window.location.href = "https://fake-api-pi.vercel.app/index-administrador.html";
            break;
            // default:
            //     window.location.href = "http://127.0.0.1:5500/screens/registro_usuario_error.html";
            //     break;
        }
    });
    

});



//     var usuarios = await clientServices.detalleUsuario(varEmail,varClave);
//     console.log(usuarios);
//         try {
//         usuarios.forEach(async element => {
//             console.log(element.email);
//             console.log(element.clave);
//             if (element.email) {
//                 window.location.href = "http://127.0.0.1:5500/index-administrador.html";
//             } else {
//                  alert("LOS DATOS NO COINCIDEN");
//               throw new Error(); //Activamos el error
//             }
//         });
//         } catch (error) {
//             alert("Errores al precargar los datos en el archivo ingresar.controller.js")
//         }



