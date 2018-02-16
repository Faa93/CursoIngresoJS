function Mostrar()
{
//tomo la edad  
var edad;
var estadocivil;
//Se eligen las variables

edad=document.getElementById('edad').value;
estadocivil=document.getElementById("estadoCivil").value;

if(edad<18)
	//Al ingresar una edad menor a 18
{
	if(estadocivil!="Soltero")
		//y un estado civil distinto a soltero
	{
		alert("Es muy pequeño para NO ser soltero");
		//Va a mostrar el mensaje "Es muy pequeño para no ser soltero"
	}
}


}//FIN DE LA FUNCIÓN
	/*if(edad<18 && estadocivil !="Soltero")
		//Al ingresar una edad menor a 18 y un estado civil distinto a soltero
		{
			alert("Es muy pequeño para NO ser soltero");
			//Va a mostrar el mensaje "Es muy pequeño para no ser soltero"
		}
