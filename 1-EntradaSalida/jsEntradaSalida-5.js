/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;

	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	//antes de hacer esto puse el nombre al final de todo, pero me acorde que se asigna de derecha a izquierda

	alert(" Usted se llama "+ nombre + " y tiene " + edad+ " años");

}

