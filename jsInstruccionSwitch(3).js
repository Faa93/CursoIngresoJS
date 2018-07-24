function Mostrar()
{
//tomo la edad  
var mes;
	mes=document.getElementById('mes').value;	

	switch(mes){

		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			break;

			default:
				alert("Este mes tiene 30 días o más");
	}


}//FIN DE LA FUNCIÓN