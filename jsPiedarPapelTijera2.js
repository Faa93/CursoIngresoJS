var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var piedra=1;
var papel=2;
var tijera=3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 eleccionMaquina=Math.floor(Math.random()*3) + 1;
alert(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1){
		ContadorDeEmpates++;
		alert("Empato");
	}else if(eleccionMaquina==3){
		ContadorDeGanadas++;
		alert("Gano");
	}
	mostarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2){
		ContadorDeEmpates++;
		alert("Empato");
	}else if(eleccionMaquina==1){
		ContadorDeGanadas++;
		alert("Gano");
	}
	mostarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
		ContadorDeEmpates++;
		alert("Empato");
	}else if(eleccionMaquina==2){
		ContadorDeGanadas++;
		alert("Gano");
	}
	mostarResultado();
	comenzar();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;


}

//no me funciona 
