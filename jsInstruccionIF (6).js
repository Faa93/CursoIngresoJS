function Mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;
 	
 	if(edad <13){
 		alert("Niño");

 	}else if(edad<18) {
 			alert("Adolescente");
 			}else{
 				alert("Adulto");
 			}
 		
}

//El else if se utiliza para usar por unica vez el procesador
