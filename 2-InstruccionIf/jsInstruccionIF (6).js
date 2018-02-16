function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("niño");
	}
	if(edad>12 && edad<18)
	{
		alert("adolescente");
	}
	if(edad>17)
	{
		alert("mayor");
	}
	
	//manera larga de hacer el ejercicio

	/*
	if(edad<13)
	{
		alert("niño");
	}else
	{
		if(edad>17)
		{
			alert("mayor");
		}
		else
		{
			alert("adolescente");
		}
		}
MANERA LOGICA DE REALIZAR EL EJERCICIO. */

}//FIN DE LA FUNCIÓN