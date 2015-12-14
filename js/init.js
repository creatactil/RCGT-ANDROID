function init(){
	
	var xnumero = localStorage.numero;
	
	$("#usuario").val(localStorage.correo);
	$("#pa2").val(localStorage.pass);
	//$("#pa2").focus();
	
	
	//globo();
	onLoad();
	
	//cargaweb();
	
	if ((typeof xnumero == 'undefined') || (xnumero == "")){
		
		$.mobile.changePage("#page0", {transition: "slide"},
            true,
            true);
		
		}else{
	inicio();
		}
	
	}
	

