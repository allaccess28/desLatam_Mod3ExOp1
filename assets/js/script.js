/* //ejercicio punto 2
alert("Por favor ingrese dos numeros enteros distintos entre si."); //alert para especificar las condiciones
let num1 = prompt("ingrese el primer número");//prompt para requerir los datos
let num2 = prompt("Ingrese el segundo número");

let suma = parseInt(num1) + parseInt(num2);//variables de las operaciones
let resta = parseInt(num1) - parseInt(num2);
let multiplica = parseInt(num1) * parseInt(num2);
let divide = parseFloat(num1) / parseFloat(num2);
let mod = parseInt(num1) % parseInt(num2);

document.write(`la suma de los numeros es  ${num1} + ${num2} es ${suma}.`);//entregar los resultados con interpolacion.
document.write("<br></br>");
document.write(`la resta de los numeros ${num1} + ${num2} es ${resta}.`);
document.write("<br></br>");
document.write(`la multiplicacion de ${num1} por ${num2} es ${multiplica}.`);
document.write("<br></br>");
document.write(`la division entre los numeros ${num1} y ${num2} es ${divide}.`);
document.write("<br></br>");
document.write(`el modulo entre los numeros ${num1} y ${num2} es ${mod}.`); */

/* // ejercicio punto 3
let num1 =prompt("Por favor ingrese la temperatura en Celsius");

let kelvin = parseFloat(num1) + 273.15;
let fahren = (parseFloat(num1)* 9/5) + 32;

document.write(`su temperatura en grados Kelvin es ${kelvin}.`);
document.write("<br></br>");
document.write(`su temperatura en grados Fahrenheit es ${fahren}.`); */

/* // ejercicio punto 4
let days = prompt("Por favor ingrese la cantidad de dias a calcular"); //prompt para obtener los datos

let week = Math.floor(parseFloat(days/7)); // calculo de variables
let years = Math.floor(parseFloat(days/365));

document.write(`Son ${days} dias `); 
document.write(` ${week} semanas `);
document.write(`y ${years} años.`);
 */

// ejercicio punto 5
let num1 = parseInt(prompt("Ingrese primer numero.")); //ingresamos los datos y realizamos la conversion del dato.
let num2 = parseInt(prompt("Ingrese segundo numero."));
let num3 = parseInt(prompt("Ingrese tercer numero."));
let num4 = parseInt(prompt("Ingrese cuarto numero."));
let num5 = parseInt(prompt("Ingrese quinto numero."));

document.write(
  `La suma de todos los numeros es ${num1 + num2 + num3 + num4 + num5}.`
);
document.write(
  `El promedio de sus numeros es ${(num1 + num2 + num3 + num4 + num5) / 5}`
);
