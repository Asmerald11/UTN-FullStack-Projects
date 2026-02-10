let usuario;
let password;
let numero_1;
let numero_2;
let numero_3;
let maximo;
let minimo;
let hola = "Hola mundo!"

function login() {
    usuario = prompt("Ingrese el usuario")
    password = prompt("Ingrese la contraseña")
    usuario = String(usuario);
    password = parseInt(password);
}

function ingresar() {
    if (usuario == "administrador" && password == 1234) {
        result.innerHTML = ("Bienvenido usuario")
    } else {
        result.innerHTML = ("Usuario o contraseña incorrectos");
    }
}

function inicio() {
    numero_1 = prompt ("inserte el primer numero:")
    numero_1 = parseFloat(numero_1)
    numero_2 = prompt ("inserte el segundo numero:")
    numero_2 = parseFloat(numero_2)
    numero_3 = prompt ("inserte el tercer numero:")
    numero_3 = parseFloat(numero_3)
}

function numeros() {
    if (numero_1 > numero_2 || numero_3 > numero_1 && numero_3 > numero_2) {
        if (numero_1 > numero_3) {
            if (numero_2 > numero_3) {
                maximo = numero_1
                minimo = numero_3
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo) 
            } else {
                maximo = numero_1
                minimo = numero_2
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo)  
            }
        } else {
            if (numero_2 > numero_1){
                maximo = numero_3
                minimo = numero_1
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo) 
            }
            else {
                maximo = numero_3
                minimo = numero_2
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo) 
            }
        }
        } else {
            if (numero_1 > numero_3) {
                maximo = numero_2
                minimo = numero_3
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo)  
            } else {
                maximo = numero_2
                minimo = numero_1
                console.log("el mayor es:" + maximo) 
                console.log("el menor es:" + minimo) 
            }
    }
}

function mostrar(){
    console.log(hola)
}