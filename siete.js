function Mostrar()
{
/* jose  M 25
   Maria F 16
   Jesus M 33
   Fer   F 81

primero validacion de codigo
prompt para nombre
prompt para sexo (distinto a f o m)
prompt para edad (distinto de 0 a 100)

   */

   var nombre;
   var edad;
   var sexo;
   var contador=0;
   var cantidadDemujeres;

   while(contador <4)
   {
   	contador++;
   	nombre=prompt("Ingrese el nombre");
   	
   	sexo=prompt("Ingrese el sexo");
   	
   	while(sexo!="m"&&sexo!="f")
   		{
   			sexo=prompt("Ingrese el sexo");
   		}

   		edad=prompt("Ingrese edad");
   		edad=parseInt(edad);
   	while(IsNaN(edad)||edad<0||edad>100)
   		{
   			edad=prompt("Ingrese edad");
   			edad=parseInt(edad);
   		}

   		





   }
}