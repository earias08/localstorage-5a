function validarCodigo (input) {
    if (input.value != '' && !isNaN(input.value)) {
        console.log('esta bien');
        input.className = 'form-control is-valid';
        return true;
    } else {
        console.log('faltan datos');
        input.className = 'form-control is-invalid';
        return false;
    }
}
function validarCampoRequerido(input) {
    if(input.value != '') {
        console.log('esta bien');
        input.className = 'form-control is-valid';
        return true;
    } else {
        console.log('faltan datos');
        input.className = 'form-control is-invalid';
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    let envio = document.getElementById('mensajeEnvio');
    if (validarCodigo(document.getElementById('codigoProducto')) &&
    validarCampoRequerido(document.getElementById('nombreProducto')) &&
    validarCampoRequerido(document.getElementById('numSerie')) &&
    validarCampoRequerido(document.getElementById('categoriaProducto')) &&
    validarCampoRequerido(document.getElementById('descProducto')) &&
    validarCampoRequerido(document.getElementById('imgProducto'))) {
        // envio.className = 'alert alert-success';
        // envio.innerHTML = 'Funkopop cargado con exito';
        console.log('datos correctos');
    } else {
        // envio.className = 'alert alert-danger';
        // envio.innerHTML = 'No se pudo realizar la carga';
        console.log('datos incorrectos');
    }
}