// botón para mostrar la información
function muestra_oculta(id) {
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    //uso el condicional IF para saber si el DIV esta oculto (Display: none) o si esta visible 
    if (div.style.display == "none"){ 
      div.style.display = "flex";
    } 
    else {
      div.style.display = "none";
    }

}

// viendo si me sale el codigo para dejar ingresar a ciertas personas, y otras no. si quieren lo pueden borrar despues //

let anios = prompt("¿Que edad tenes?");

while (anios < 10||anios > 19) {
     alert("No podes ingresar a la pagina");
     anios = prompt("¿Que edad tenes?");
}

alert("Bienvenido/a");