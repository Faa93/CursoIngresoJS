function Mostrar()
{

var contador=0;
var acumulador=0;
var numero;
var suma;

suma=0
numero=parseInt(numero);

	while(contador < 5)
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero");
		numero=parseInt(numero);
		suma=numero+suma;
		

	}
	
	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/contador;


}//FIN DE LA FUNCIÓNz