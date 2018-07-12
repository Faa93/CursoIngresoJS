function Mostrar()
{
	
	var edad;

	edad=document.getElementById('edad').value;
	

	if(edad==15){

	
	alert("Niña bonita");

	}

}

//FIN DE LA FUNCIÓN


/* el if funciona con un condicion, true o false

 
 OPERADORES

 
  == igual
  
  === igualdad estricta (la igualdad estricta compara los tipos de valores, ej, que tipo de variable es)
 
  EJ: (TRUE =="TRUE") LA IGUADAD ESTRICTA COMPARA TIPOS, LA IGUALDAD COMUN COMPARA VALORES.
  
  != distinto  (ej !true ESTA SIENDO false)
  
  > mayor
 
  >= mayor igual
 
  < menor
 
  <= menor igual

OPERADORES LOGICOS
(Sirven si queremos poner mas de una condicion
Ej, if(edad==18 || sexo=="m"))

 && i

 || o
 
 ELSE (se ejecuta si la primer condicion no fue cumplida)




Tabla de verdad de || y &&

A   B   &&   ||
V   V   V    V
V   F   F    V 
F   V   F    V
F   F   F    F
*/