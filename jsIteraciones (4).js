function Mostrar()
{

	//var numero = prompt("ingrese un número entre 0 y 10.");
	var numero;
	
	numero=0;

	while(numero <=0 || numero >9 )
			{
				numero=prompt("Ingrese un numero");

			}

	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN	