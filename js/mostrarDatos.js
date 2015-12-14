function mostrarDatos(){
	
	$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
	
	var vnumero = localStorage.numero;
	var vnombre = localStorage.nombre;
	var vapellidos = localStorage.apellidos;
	var vtelefono = localStorage.telefono;
	var vcorreo = localStorage.correo;
	var vpass = localStorage.pass;
	
	
	
	$("#numero").val(vnumero);
	$("#nombre").val(vnombre);
	$("#apellidos").val(vapellidos);
	$("#telefono").val(vtelefono);
	$("#correo").val(vcorreo);
	$("#pa1").val(vpass);
	
		
	}

