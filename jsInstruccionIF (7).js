function Mostrar()
{

	var edad;
	var estadoCivil;
	
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="soltero"){
		alert("Es muy pequeño para NO ser soltero");

	}







}