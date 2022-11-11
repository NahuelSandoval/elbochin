// -----------Eventos------

// voy a llamar al boton

let miBoton = document.getElementById("boton");
console.log(miBoton);

// determino el evento escuchar

miBoton.addEventListener ( "click" , respuestaClick);

//Respuesta evento( se puede poner mas de una)

function respuestaClick(){
    console.log("Que tal co")
}

// Otra manera ------------propiedades on

miBoton.onclick =() => {
    console.log("HOla desde manejador onclick")
}

