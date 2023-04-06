let costoTotal = 0;
let opcion;

// CLASES
class cliente{
    constructor(nombre,edad,direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    saludo(){
        alert("Hola " + this.nombre);
    }
}

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    sumaIGV(){
        this.precio = this.precio * 1.18;
    }
}
// Crear objetos en array
const productos = [];
productos.push(new Producto('Shampoo', 29.90));
productos.push(new Producto('Cepillo', 12.00));
productos.push(new Producto('Desodorante', 18.00));

for(const producto of productos){
    producto.sumaIGV();
}

//

nombre = prompt("Ingresa tu nombre: ");
edad = prompt("ingresa tu edad:  ");
direccion = prompt("Ingresa tu dirrecion: ");

//FUNCIONES 

function cuotas(){
    let cuota = (costoTotal/12).toFixed(2);
    alert('El pago se hara en cuotas de: $'+ cuota + ' en 12 meses.');
    document.write('El pago se hara en cuotas de: $'+ cuota + ' en 12 meses.<br>');
}

function impuesto(costo){
    let costoIGV = (costo * 1.18);
    let costoDesc = (costoIGV * 0.8);
    alert("El costo con IGV y descuento del 20% es: $" + costoDesc);
    document.write("El costo con IGV : $" + costoIGV +"<br>")
    document.write("El costo con IGV y descuento del 20% es: $" + costoDesc +"<br>");
}

function personasReg(){
    let per1,per2,per3,per4,per5;
    per1 = parseInt(prompt('Ingresa la edad de la persona 1:'));
    per2 = parseInt(prompt('Ingresa la edad de la persona 2:'));
    per3 = parseInt(prompt('Ingresa la edad de la persona 3:'));
    per4 = parseInt(prompt('Ingresa la edad de la persona 4:'));
    per5 = parseInt(prompt('Ingresa la edad de la persona 5:'));

    let tiempo = 5 * 3;
    let promedio = (per1+per2+per3+per4+per5) / 5;
    alert("La cantidad de tiempo de espera estimada es: " + tiempo + " min.");
    alert("El promedio de edad de la personas es: " + promedio);
    document.write('Las edades de las personas son: ' + per1 + ', ' + per2 + ', ' + per3 + ', ' + per4 + ', ' + per5 + '<br>');
    document.write('El promedio de las edades es: ' + promedio);
    document.write('<br>EL tiempo de esperea es: ' + tiempo + ' min.');
}
// Calcular nota final de alumnos ingresados.
// No entiendo la consigna, se debe calcular el promedio de las notas????
function alumnos(){
    let nota1,nota2,nota3,nota4,nota5;
    let promedio;
    nota1 = parseInt(prompt('Ingresa la nota del alumno 1: '));
    nota2 = parseInt(prompt('Ingresa la nota del alumno 2: '));
    nota3 = parseInt(prompt('Ingresa la nota del alumno 3: '));
    nota4 = parseInt(prompt('Ingresa la nota del alumno 4: '));
    nota5 = parseInt(prompt('Ingresa la nota del alumno 5: '));
    promedio = (nota1 + nota2 + nota3 +nota4 +nota5) / 5;
    alert("El promedio de las notas de los alumnos es: " + promedio);
    document.write('Las notas de los alumnos son: '+nota1+', '+nota2 +', '+nota3 +', '+nota4 +', '+nota5 +'<br>');
    document.write('El promedio de las notas es: ' + promedio);


}

function MostrarCarrito(){
    if(carrito.length == 0){
        console.log("El carrito esta vacio :p");
    }
    else{
        console.log("El lista del carrito es el siguiente: ")
        carrito.forEach(element => {
            console.log(
            "- Nombre del producto: " + element.nombre + "\n" + 
            "- Precio del producto: $" + element.precio + "\n\n");
        });
    }
}

function Ordenar(){
    carrito.sort(function (a, b) {
        if (a.precio > b.precio) {
        return 1;
        }
        if (a.precio < b.precio) {
        return -1;
        }
        return 0;
    });
}

function Limpiar() {
    if(carrito.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
    let opcion = confirm("Si confirma, borrará todo lo que ha ingresado");
    
    if (opcion) {
        carrito.splice(0,carrito.length)
        alert("\n\n Se vacio el carrito :P \n\n");
    } else {
        alert("\n\n Se cancelo la destruccion :D \n\n");
    }
    }
}


function FiltroNombre(){
    console.log("Los nombres de los productos son: \n\n");
        const soloNombres =  carrito.map((element)=>element.nombre)
        for (const key in soloNombres) {
            console.log("- " + soloNombres[key] + "\n");
            }
}

// Crear OBJETO CLIENTE
const cliente1 = new cliente(nombre, edad, direccion);
cliente1.saludo();


// ARRAY PARA PRODUCTOS - CARRITO
const carrito = [];



// MENU
while(opcion != 7){
    opcion = prompt("Ingresa una Opcion:\n1.Shampoo\n2.Cepillo de dientes\n3.Desodorante");
    let op1 = 0;
    switch(opcion){
        case '1':
            costoTotal += productos[0].precio;
            carrito.push(productos[0]);
            op1 = parseInt(prompt('Desea agregar otro producto?\n1.Si\n2.No'));
            if(op1 == 2){
                opcion = 7;
            }
            break;
        case '2':
            costoTotal += productos[1].precio;
            carrito.push(productos[1]);
            op1 = parseInt(prompt('Desea agregar otro producto?\n1.Si\n2.No'));
            if(op1 == 2){
                opcion = 7;
            }
            break;
        case '3':
            costoTotal += productos[2].precio;
            carrito.push(productos[2]);
            op1 = parseInt(prompt('Desea agregar otro producto?\n1.Si\n2.No'));
            if(op1 == 2){
                opcion = 7;
            }
            break;
        
        
        default:
            prompt('Ingresa una opcion valida.');
    
    }
}

MostrarCarrito();
Ordenar();
MostrarCarrito();
Limpiar();
MostrarCarrito();
FiltroNombre();



//alert("El costo total es : $" + costoTotal);
document.write("El costo total es : $" + costoTotal + "<br>");
document.write("<h2>El costo total en cuotas de 12 meses: </h2><br>");
cuotas();
//document.write("<h2>El impuesto de un producto de $30.00</h2><br>");ç
//impuesto(30.00);
//document.write("<h2>Personas registradas: </h2><br>");
//personasReg();
//document.write("<h2>Notas de alumnos registrados: </h2><br>");
//alumnos();


