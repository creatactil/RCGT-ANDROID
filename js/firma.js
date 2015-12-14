function firma(){
	
	var xnumero4 = localStorage.numero;
	var xregistro4 = $("#registrofirma").text();
	
	
	$.ajax({
		url: 'http://rcgtapp.creatactil.com/php/firma.php',
		type: 'POST',
		timeout: 5000,
		data: {numero: xnumero4, registro: xregistro4},
		cache: false,
		dataType: "text",
		success: onSuccess
	
	
		});
		
		 function onSuccess(data)
            {
             
    		alert(data);
           	globo();
			$.mobile.changePage("#page1", {transition: "slide"},true, true);
		    }
				

	}
	
