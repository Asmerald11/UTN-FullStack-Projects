var numero_1;
var numero_2;
var suma;

function inicio() {
    //sintaxis de una funcion
    numero_1 = prompt("Ingrese un numero entero: ");
    numero_2 = prompt("Ingrese otro numero entero:");
    numero_1 = parseFloat(numero_1);
    numero_2 = parseFloat(numero_2);
}

function suma() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor inserte un numero. Haga click en iniciar.")
    } else {
        suma = numero_1 + numero_2;
        console.log("el resultado de la suma es: " + suma);

    }
}

function resta() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor inserte un numero. Haga click en iniciar.")
    } else {
        resta = numero_1 - numero_2;
        console.log("el resultado de la resta es: " + resta);

    }
}

function multiplicacion() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor inserte un numero. Haga click en iniciar.")
    } else {
        multiplicacion = numero_1 * numero_2;
        console.log("el resultado de la multiplicacion es: " + multiplicacion);

    }
}

function division() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor inserte un numero. Haga click en iniciar.")
    } else {
        division = numero_1 / numero_2;
        console.log("el resultado de la division es: " + division);

    }
}

