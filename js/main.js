function saludo() {
    alert("Bienvenido a mi website con boostrap y Js");   
}
//ALGORITMO DE SUMA

function suma() {
    //declramos las varibles
    let A =0;
    let B =0;
    let S =0;
    //solicitamos valores
    A= parseInt(prompt("ingrese el primer valor a sumar"));
    B= parseInt(prompt("ingrese el segundo valor a sumar"));
    //realizamos los procesos
    S=A+B;
    //mostramos el resultado en la pantalla
    alert("el resultado de la suma es:"+S);
}

//ALGORITMO DE VARIAS OPERACIONES ENTRE DOS NUMEROS
function operaciones() {
    let a = 0;
    let b = 0;
    let s = 0;
    let r = 0;
    let m = 0;
    let d = 0;
    a = parseInt(prompt("ingrese primer valor a operar"));
    b = parseInt(prompt("ingrese segundo vslor a operar"));
    s = a + b;
    r = a - b;
    m = a * b;
    d = a / b;

    alert("el resultado de la suma es: " + s +"el resultado de la resta  es: " + r + "el resultado de la multiplicacion es: " + m +"el resultado de la divicion es: " + d);
}



// DA EL NUMERO MAYOR INGRESADO
function mayor() {
    alert("determina el numero mayor de los ingresados");   
    let N1 =0;
    let N2 =0;
N1= parseInt(prompt("Ingrese el primer valor"));
N2= parseInt(prompt("Ingrese el segundo valor"));
if(N1==N2){
alert("los valores ingresados son iguales");
}
else if(N1>N2){
    alert("el numero mayor es" +N1);
}
else{ 
    alert("el numero mayor es" +N2);
}
}

// promedio el colegio abc requiere un sistema o un algoritmo que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 calificaciones y este, le indique si aprobo y reprobo la materia teniendo encuenta que se aprueba si el puntaje es mayor o igual a 6
function calificaciones() {
    alert("determina el promedio de calificaciones");
    let materia= parseInt(promt("Ingrese el nombre de la materia:"));
    
    A= parseInt(prompt("ingrese la primera nota"));
    B= parseInt(prompt("ingrese la segunda nota"));
    C= parseInt(prompt("ingrese la tercera nota"));
    D= parseInt(prompt("ingrese la cuarta nota"));
    E= parseInt(prompt("ingrese la quinta nota"));
    F= parseInt(prompt("ingrese la sexta nota"));
    G= parseInt(prompt("ingrese la septima nota"));

    let A=0;
    let B=0;
    let C=0;
    let D=0;
    let E=0;
    let F=0;
    let G=0;
    
    let sumaNotas = A + B + C + D + E + F + G;
    let promedio = sumaNotas / 7;

    if (promedio >= 6) {
        alert(`El estudiante aprobó la materia ${materia} con un promedio de ${promedio.toFixed(2)}`);
    } else {
        alert(`El estudiante reprobó la materia ${materia} con un promedio de ${promedio.toFixed(2)}`);
    }
}

//se necesita un algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, euros y soles
function conversion() {
    let A=0;
    let B=4119;
    let C=0.92;
    let D=145.75;
    A= parseInt(prompt("porfavor ingrese los dolares a convertir"));
    V1=A*B;
    V2=A*C;
    V3=A*D;
    alert(`${A} dólares equivale a:\n${V1.toFixed(2)} pesos colombianos\n${V2.toFixed(2)} euros\n${V3.toFixed(2)} yenes japoneses`);
}
//un individuo desea nvertir su capital en un banco y requiere saber cuanto dinero ganara despues de N numero de años teniendo encuenta que el banco haga un interez de 1,3% mensual
function calcularInteres() {
    let capital = parseFloat(prompt("Ingrese el capital inicial:"));
    let años = parseInt(prompt("Ingrese el número de años:"));
    let tasaInteresMensual = 0.013; // 1.3% como decimal

    let meses = años * 12; // Convertir años a meses
    let saldoFinal = capital * Math.pow(1 + tasaInteresMensual, meses);

    alert(`Después de ${años} años, su saldo final será de $${saldoFinal.toFixed(2)}`);
}

//calificaciones con la etiqueta for
function calificacionesfor() {
    alert("Determina el promedio de calificaciones");
    let materia = prompt("Ingrese el nombre de la materia:");

    let sumaNotas = 0;
    
    for (let i = 1; i <= 7; i++) {
        let nota = parseInt(prompt(`Ingrese la nota ${i}:`));
        sumaNotas += nota;
    }
    
    let promedio = sumaNotas / 7;

    if (promedio >= 6) {
        alert(`El estudiante aprobó la materia ${materia} con un promedio de ${promedio.toFixed(2)}`);
    } else {
        alert(`El estudiante reprobó la materia ${materia} con un promedio de ${promedio.toFixed(2)}`);
    }
}
 //figuras java

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
    
}

function circulo() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function hor() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("hor");
}

function ver() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("ver");
}

function moveTop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
}

function moveBotom() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("Button");
}

function Right() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("Right");
}