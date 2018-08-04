//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var precio1;
	var precio2;
	var precio3;

	precio1=document.getElementById('precioUno').value;
	precio1=parseInt(precio1);
	
	precio2=document.getElementById('precioUno').value;
	precio2=parseInt(precio2);
	
	precio3=document.getElementById('precioUno').value;
	precio3=parseInt(precio3);


	suma= (precio1 + precio2 + precio3);
	promedio =suma/3;

	document.write("La suma es: " + suma + "y el promedio es: " + promedio);
	


}

