/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var suma;
	//primero ponemos las variables (los valores que utilizaremos)

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;
	//el get element by id vincula el js con el html y le da el valor al nº

	num1=parseInt(num1);
	num2=parseInt(num2);
	
	suma=num1 + num2

	alert("La suma es" + " " + suma);

}

function restar()
{
	var num1;
	var num2;
	var restar;

	num1=document.getElementById("numeroUno").value;
	num2=document.getElementById("numeroDos").value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	restar=num1 - num2

	alert("La resta es" + " " + restar);

}

function multiplicar()
{ 
	var num1;
	var num2;
	var multiplicar;

	num1=document.getElementById("numeroUno").value;
	num2=document.getElementById("numeroDos").value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	multiplicar=num1 * num2

	alert("La multiplicación es" + " " + multiplicar);
}

function dividir()
{
	var num1;
	var num2;
	var dividir;

	num1=document.getElementById("numeroUno").value;
	num2=document.getElementById("numeroDos").value;

	num1=parseInt(num1);
	num2=parseInt(num1);

	dividir=num1 / num2

	alert("La división es" + " " + dividir);
	
}

