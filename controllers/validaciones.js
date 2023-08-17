//VALIDACIONES ESPECÍFICAS PARA CADA INPUT, PARA CADA TEXTAREA

//I_N_P_U_T
export function valida(input) {
  const tipoDeInput = input.dataset.tipo; //Guardar el tipo de data set
  if (validadores[tipoDeInput]) { //si la propiedad "nacimiento" del formulario tambien existe en el objeto validadores
    validadores[tipoDeInput](input); //le voy a pasar UN VALOR DE INPUT EN ESPECÍFICO para que cargue esta propiedad en el objeto validadores
  }
  //el usuario ya salió del campo que estaba rellenando...
  if (input.validity.valid) {
    input.parentElement.classList.remove(".input-container"); //esta clase está en una libreria externa
    input.parentElement.querySelector(".input-message-error").innerHTML = ""; //si me salto el campo NO presentará este error rojo
  } else {
    input.parentElement.classList.add(".input-container");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input); //si me salto el campo presentará este error rojo
  }
}

//T_E_X_T_A_R_E_A
export function validaAreaDeTexto(textarea) {
  let valorDeAreaDeTexto  = validarEspaciosEnBlancoParaTextArea(textarea);
  if (valorDeAreaDeTexto === "") { //si la variable esta vacía
    textarea.parentElement.classList.remove(".input-container"); //quitar esta clase al elemento principal
    textarea.parentElement.querySelector(".input-message-error").innerHTML = ""; //dejar vacío el mensaje del span
  }else{
    textarea.parentElement.classList.add(".input-container");
    textarea.parentElement.querySelector(".input-message-error").innerHTML = "Error, no todos los carácteres deben ser espacios en blanco"; //si me salto el campo presentará este error rojo
  }
   //el usuario ya salió del campo que estaba rellenando...
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  empresa: {
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "El nombre debe contener mínimo 10 y máximo 40 carácteres.",
      customError: "Todos los caractéres no deben ser espacios vacíos",
  },
}

const validadores = {
  empresa: (input) => validarEspaciosEnBlanco(input), //la función validarNacimiento cargará UN VALOR DEL INPUT EN ESPECÍFICO que vive dentro del objeto Validadores
};

const validadoresAreaDeTexto = {
  mensajeria: (textarea) => validarEspaciosEnBlanco(textarea), //la función validarNacimiento cargará UN VALOR DEL TEXTAREA EN ESPECÍFICO que vive dentro del objeto ValidadoresAreaDeTexto
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      // console.log(tipoDeInput, error);
      // console.log(input.validity[error]);
      // console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarEspaciosEnBlanco(textareaOinput) {
  let datosTextAreaOinput = textareaOinput.value.toString();
  var mensaje = "";
  if(datosTextAreaOinput.trim() == ""){
    mensaje = "Los carácteres no deben ser espacios en blanco";
  }
  // console.log( "MENSAJE: " + mensaje);
  textareaOinput.setCustomValidity(mensaje);
}


function validarEspaciosEnBlancoParaTextArea(textareaOinput) {
  let datosTextAreaOinput = textareaOinput.value.toString();
  var mensaje = "";
  if(datosTextAreaOinput.trim() == ""){
    mensaje = "Los carácteres no deben ser espacios en blanco";
    textareaOinput.value = "";
  }
  // console.log( "MENSAJE DE TEXTAREA: " + mensaje);
  return mensaje;
}

