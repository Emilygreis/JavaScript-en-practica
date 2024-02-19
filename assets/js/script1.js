let form = document.getElementById("formulario");

form.addEventListener("submit", function( event ) {
    event.preventDefault();
    reiniciarMensajes();
    let textNombre = document.getElementById("nombre").value;
    let textAsunto = document.getElementById("asunto").value;
    let textMensaje = document.getElementById("mensaje").value;
    let resultado = validar(textNombre,textAsunto,textMensaje);
    if(resultado == true){
        exito();
    };
});

function reiniciarMensajes() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function validar(textNombre,textAsunto,textMensaje){
    let pasamosLaValidacion = true;
    let validacionTexto = /[a-zA-Z]/gim;
    if(validacionTexto.test(textNombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
        pasamosLaValidacion = false;
    };
    if(validacionTexto.test(textAsunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        pasamosLaValidacion = false;
    };
    if(validacionTexto.test(textMensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        pasamosLaValidacion = false;
    };

    return pasamosLaValidacion;
}

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito!!!";
};
