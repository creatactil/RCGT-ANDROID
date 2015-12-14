function borrarMensaje(id_aux){
	
		var zid_aux = id_aux;       
        //var zcodigo = codigo;
       // var zdni = localStorage.dni;
		
	
	var r=confirm("¿Quiere borrar la circular?")
		
	if (r==true){
	
	$.ajax({
		type: "GET",
        url: "http://rcgtapp.creatactil.com/php/borrarmensaje.php",
		data: ({id_aux: zid_aux }),
		cache: false,
        dataType: "text",
		success: onSuccess
        
                     
		});
	
	
	function onSuccess(data)
            {
              		
			//alert(data);
			if (data == "Mensaje Borrado"){
			$('#page4 ul').empty();
			$('#lista').empty();
			$('#lista1').empty();
		
			$('#lista').listview('refresh', true);
			$('#lista1').listview('refresh', true);
		
			crearLista();
			}
			
			
			
			
			}
	
	
	
	}
		
		
		
		
	}