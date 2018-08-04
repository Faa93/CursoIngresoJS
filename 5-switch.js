//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var mes;
mes = prompt("Ingrese un mes");
mes = mes.toLowerCase(); //En caso de que ponga en mayus y minuscula la palabra el lower lo convierte todo en minuscula.
//El caso contario de toLowerCase es ToUpperCase donde lleva todo a mayuscula.
switch(mes)
{
	case "enero":
		alert("Comienza el año");
	break;
	case "diciembre":
		alert("Se vienen las fiestas!!!"):
	break;
	default:
		alert("No es enero ni diciembre");
}		

	
}

