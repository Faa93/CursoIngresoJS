//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var edad;
	var sexo;
	var contador;
	var suma = 0;
	var promedio;
	var minimo;
	var flag=0;
	var cantVarones = 0;


	for(contador=0; contador<100; contador++)
	{
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad = prompt("Reingrese la edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese el sexo");
		while(sexo!="F" && sexo!="M")
		{
			sexo = prompt("Reingrese el sexo");
		}

			suma = suma + edad; // PUNTO A

		if(flag==0 || edad<minimo) //PUNTO B
		{
			minimo = edad;
		}
			flag = 1;

		if(sexo=="M" && edad>=20) //PUNTO C
		{
			cantVarones++;
		}



	}

		promedio = suma / 100;
		alert("El promedio es: " + promedio);
		alert("La minima edad es: " + minimo);
		alert("La cantidad de varones que tienen 20 o mas es: " + cantVarones);
		
}

