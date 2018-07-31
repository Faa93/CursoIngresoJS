function Mostrar()
{

	    var contador=0;
		var respuesta='si';
		var numero;
		var acumuladorpositivos=0;
		var acumuladornegativos=1;
		
		while(respuesta!='no')
		{
			
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			contador=contador+1;
			if(numero > 0)
			{
				acumuladorpositivos = acumuladorpositivos + numero;
			}
			if(numero < 1)
			{
				acumuladornegativos = acumuladornegativos * numero;
			}

			respuesta=prompt("Para continuar tocar si");
		}

			document.getElementById('suma').value=acumuladorpositivos;
			document.getElementById('producto').value=acumuladornegativos;


		

}//FIN DE LA FUNCIÓN

//contador =variable + constante
//acumulador = variable + variable