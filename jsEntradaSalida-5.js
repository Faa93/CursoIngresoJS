/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	/* var nombre
	nombre=document.getElementById('elNombre').value;
	alert(nombre);
	var edad
	edad=document.getElementById('laEdad').value;
	alert(edad);  
	
	De esta manera puedo crear solamente dos cuadros de dialogo, pero en el caso de que quiera CONCATENARLO
	debo realizarlo de la siguiente manera.
	*/

	var nombre;
	var edad;

	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;

	alert(nombre +" "+ edad);

//
}

