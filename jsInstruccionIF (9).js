function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroAleatorio;
	
	numeroAleatorio=Math.floor(Math.random() * 10)+ 1;

	alert(numeroAleatorio);
}

// la formula de math.random se encarga de darnos un numero random, pero este nos saldra flotante
//por lo que se le agrega la formula mat.floor, el cual nos permitira redondear en numero
// math.floor(math.random()* max - min)+ min