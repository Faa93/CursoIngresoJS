//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var numero1;
	var numero2;

	numero1 = prompt("ingrese un numero");
	numero1 = parseInt(numero1);
	numero2 = prompt("Ingrese otro numero");
	numero2 = parseInt(numero2);

	suma = numero1 + numero2;

	if(suma<0)
	{
		document.write("ES POSITIVO");
	} 
	else
		if(suma<0)
		{
			document.write("ES NEGATIVO");
		}
		else
		{
			document.write("ES CERO");
		}
}

