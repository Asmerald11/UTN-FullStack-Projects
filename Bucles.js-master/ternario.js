//Variable con ternario - Estructura
//let resultado = (condicion) ? "verdadero" : "falso"

let numero = 9;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);

let edad = prompt("Ingresa tu edad: ");

edad > 18 ? (
    alert("Adelante!!"),
    location.assign("socio.html")
    ) : (
        alert("Lo siento no puede ingresar"),
        location.assign("error.html")
    );
