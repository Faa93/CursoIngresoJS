//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var peso;
	//el for se usa para saber la cantidad de iteracciones se van a llevar a cabo, el while se usa cuando no sabemos cuantas iterraciones vamos a llevar.
	var contador;
	var maximo;
	var minimo;
	var flag = 0; //la bandera es un valor que solo se va a ejecutar una vez cuando el if pase por el, tomando el valor que otorga el usuario

	while(contador<50)
	{
			peso = prompt("Ingrese el peso en KG");
			peso = parseFloat(peso);
			
	while(peso<=0)
		{
			peso = prompt("ERROR!!. Reingrese el peso en KG.");
			peso = parseFloat(peso);
		}
	if(flag==0 || peso>maximo)
		{
			maximo = peso;
		}
	if(flag==0 || peso<minimo)
		{
			minimo = peso;
		}
		
		flag = 1;
		
		contador++;
	}
	
	document.write("El maximo es: " + Maximo + "El minimo es: " + Minimo);


}

