import { valida } from "./validaciones.js";
import { validaAreaDeTexto } from "./validaciones.js";
import { validaLogin } from "./validacionesLogin.js";
import { validaAreaDeTextoLogin } from "./validacionesLogin.js";
import { validaProducto } from "./validacionesFormularioProducto.js";
import { validaAreaDeTextoProducto } from "./validacionesFormularioProducto.js";

//PARA_EMPRESA
//PARA INPTUS
const inputs = document.querySelectorAll("input");
inputs.forEach( //LIMPIAR TEXTO
  (input) => {
    input.addEventListener("blur", (input) => {
    quitarEspaciosEnBlanco(input.target);
    });
}
);
inputs.forEach( //VALIDAR ERRORES
  (input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
}
);
//PARA TEXTAREAS
const textareas = document.querySelectorAll("textarea");
textareas.forEach( //lIMPIAR TEXTO
  (textarea) => {
    textarea.addEventListener("blur", (textarea) => {
    quitarEspaciosEnBlanco(textarea.target);
    });
}
);
textareas.forEach((textarea) => { //VALIDAR ERRORES
  textarea.addEventListener("blur", (textarea) => {
    validaAreaDeTexto(textarea.target);
  });
});

//PARA_LOGIN
//PARA INPTUS
inputs.forEach( //LIMPIAR TEXTO
  (input) => {
    input.addEventListener("blur", (input) => {
    quitarEspaciosEnBlanco(input.target);
    });
}
);
inputs.forEach( //VALIDAR ERRORES
  (input) => {
  input.addEventListener("blur", (input) => {
    validaLogin(input.target);
  });
}
);
//PARA TEXTAREAS
textareas.forEach( //lIMPIAR TEXTO
  (textarea) => {
    textarea.addEventListener("blur", (textarea) => {
    quitarEspaciosEnBlanco(textarea.target);
    });
}
);
textareas.forEach((textarea) => { //VALIDAR ERRORES
  textarea.addEventListener("blur", (textarea) => {
    validaAreaDeTextoLogin(textarea.target);
  });
});

//PARA_TODOS
function quitarEspaciosEnBlanco(textareaOinput) {
  const datosTextAreaOinput = textareaOinput.value;
  // console.log(datosTextAreaOinput);
  const datosTextAreaOinputLimpios = datosTextAreaOinput.trim();
  // console.log(datosTextAreaOinputLimpios);
  textareaOinput.value= datosTextAreaOinputLimpios;
}

//PARA_PRODUCTO
//PARA INPTUS
inputs.forEach( //LIMPIAR TEXTO
  (input) => {
    input.addEventListener("blur", (input) => {
    quitarEspaciosEnBlanco(input.target);
    });
}
);
inputs.forEach( //VALIDAR ERRORES
  (input) => {
  input.addEventListener("blur", (input) => {
    validaProducto(input.target);
  });
}
);
//PARA TEXTAREAS
textareas.forEach( //lIMPIAR TEXTO
  (textarea) => {
    textarea.addEventListener("blur", (textarea) => {
    quitarEspaciosEnBlanco(textarea.target);
    });
}
);
textareas.forEach((textarea) => { //VALIDAR ERRORES
  textarea.addEventListener("blur", (textarea) => {
    validaAreaDeTextoProducto(textarea.target);
  });
});






