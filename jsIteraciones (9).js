function Mostrar()
{

	var contador=0;
	/*
	var maximo=-9999;
	var minimo=+9999;
	*/


	var numero;
	var respuesta='si';
	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingrese un numero #"+contador);
		numero=parseInt(numero);

 

		if(contador==1)
		{
			maximo= numero;
			minimo=numero;
			
		}else
		{

				if(numero>maximo)
				{
					maximo=numero;
				}
				if(numero<minimo)
			   	{
			   		minimo=numero;
			   	}
		
		}

	
    	respuesta=prompt("Para continuar presione si");
	

	}
	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN