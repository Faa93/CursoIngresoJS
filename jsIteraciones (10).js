function Mostrar()
{

	var contador=0; 
	var numero;
	var respuesta="si";
	var acumuladornegativos=0;
	var acumuladorpositivos=0;
	var contadorpositivos=0;
	var contadornegativos=1;
	var contadorceros=0;
	var contadorpares=0;	
	var mensaje;		


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese numeros");
		numero=parseInt(numero);

		if(numero < 0)
		{
			acumuladornegativos=numero;
			contadornegativos++;

		}else if(numero > 0 )
		{
			acumuladorpositivos=numero;
			contadorpositivos++;

		}else
		{
			contadorceros++;
		}
		if(numero %2==0)
		{
			contadorpares++;
		}


		respuesta=prompt("¿Desea continuar?");
	}

		if(contadorpositivos>contadornegativos)
		{
			mensaje="Hay mas positivos";
		} else
		{
			mensaje="Hay mas negativos";
		}


	document.write("Suma de negativos = " + contadornegativos + "<br>" );



}//FIN DE LA FUNCIÓN