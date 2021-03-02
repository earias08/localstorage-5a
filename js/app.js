// logica pagina principal

let listaFunkopop = [];
leerProductos();

function leerProductos(){
    // el objetivo de esta funcion es traer los datos del localstorage 
    if(localStorage.length > 0){
        listaFunkopop = JSON.parse(localStorage.getItem('listaFunkoKey'));
        dibujarCard();
    }
}

function dibujarCard(){
    let fila = document.getElementById('listaFunko');
    // limpio los datos dentro de la fila
    fila.innerHTML = '';

    console.log(listaFunkopop);
}