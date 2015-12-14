function lasesion(){
var xdni = localStorage.dni;


if (typeof numero == 'undefined'){
	
	
	alert("Regístrese, su dispositivo no tiene datos de registro.");
	$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
	
	
		
	}else{
		crearLista();
		
		}
		
}