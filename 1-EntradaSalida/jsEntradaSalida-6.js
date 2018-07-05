/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=(numeroUno+numeroDos);

	alert(resultado);

	//El signo mas sirve para dos cosas, para sumar y para concatenar. Cuando le pasamos un texto, lo concatena, cuando le pasamos un numero, lo suma
	//el parseInt le da el valor de un numero
	//


	/*
	var numeroUno
	var numeroDos
	var sumar
	
	document.getElementById('numeroUno').value;
	document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	sumar=(numeroUno+numeroDos);

	Alert("La suma es " Sumar);
	*/

}

