//Estructura del switch

/*switch (expresion) {
    case 1:
        //codigo
        break;
    case 2:
        //codigo
        break;
    ...
} */

let producto = "Naranjas"

switch (producto) {
    case "Papas":
        console.log("Las papas estan a 45 pesos.")
        break;
    case "Naranjas":
        console.log("Las naranjas estan a 90 pesos.")
        break;
    case "Duraznos":
        console.log("Las duraznos estan a 120 pesos.")
        break;
    default:
        console.log("Producto no disponible.")
}

//Estructura del While
//while ( condicion ) {
    //codigo
//};

let contador = 0;

while (contador < 10){
    console.log(contador)
    contador++
}

//Do while

/*do{
    console.log(contador)
    contador++
}while(contador < 10);*/

do{
    console.log(contador)
    contador++
}while(contador < 10);

//Bucle for
/*for(veriable, condicion, contador){

}*/

for(let contar = 0; contar < 5; contar++){
    console.log(contar)
}