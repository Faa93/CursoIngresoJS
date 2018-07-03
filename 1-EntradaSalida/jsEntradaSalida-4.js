/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt("Ingrese su nombre");
	document.getElementById('elNombre').value=nombre;

	//En este ejercicio elegimos la variable nombre
	//a la variable le designamos el prompt que nos esta pidiendo que INGRESEMOS EL NOMBRE
	//luego utilizamos el get element para ingresar al HTML y le permitimos que a la ventana de la pagina mostrar nuestro valor
	// nombre=document.getelement... 

}

