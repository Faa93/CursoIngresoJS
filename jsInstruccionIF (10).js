function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota=Math.floor(Math.random()*11)+1;

		if(nota>=9){
			alert("Excelente");
		
		}else if(nota>=4){
			alert("APROBO");
		}else{
				alert("Vamos, la proxima se puede");	
		}

}