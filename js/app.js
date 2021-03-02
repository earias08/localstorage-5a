// logica pagina principal

let listaFunkopop = [];
leerProductos();

function leerProductos() {
  // el objetivo de esta funcion es traer los datos del localstorage
  if (localStorage.length > 0) {
    listaFunkopop = JSON.parse(localStorage.getItem("listaFunkoKey"));
    dibujarCard();
  }
}

function dibujarCard() {
  let fila = document.getElementById("listaFunko");
  // limpio los datos dentro de la fila
  fila.innerHTML = "";
  let informacionFuko = "";
  for (let i in listaFunkopop) {
    // agregar una imagen si el usuario no cargo nada en la propiedad imagen
    let img ='';
    if(listaFunkopop[i].imagen === ''){
        // agregar una imagen por defecto
        img = "img/productos/tony.png";
    }else{
        // cargo la imagen que puso el usuario
        img = `img/productos/${listaFunkopop[i].imagen}`;
    }

    informacionFuko = `<div class="col-md-3 mt-4">
        <div class="card">
          <img
            src="${img}"
            class="card-img-top"
            alt="funkopop ${listaFunkopop[i].nombre}"
          />
          <div class="card-body">
            <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
            <p class="card-text">
            ${listaFunkopop[i].descripcion}
            </p>
            <a href="#" class="btn btn-primary disabled">ver mas...</a>
          </div>
        </div>
      </div>`;
    //   agregar las columnas a la fila
    fila.innerHTML += informacionFuko;
    //fila.innerHTML = fila.innerHTML + informacionFuko;
  }
}
