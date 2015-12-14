function passEmail(){
	
	var xusuario = $("#usuario").val();
	
	if(document.form2.usuario.value.length == ""){
		alert("Escriba su correo eléctronico");
		document.form2.usuario.focus();
		return false;
		
		}else{
	
	$.ajax({
		url: 'http://rcgtapp.creatactil.com/php/passemail.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {usuario: xusuario},
		error: function() {
       	 alert("Correo incorrecto");
   		},
		success: function(data, response){

			if (response == 'success'){
    
			$.each(data, function(i,item){

		
				alert("Se le ha enviado los datos a su correo electrónico");
				
								
			});
			}
		
		},
		
	});	
		}

}