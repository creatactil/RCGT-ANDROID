function borrafavorito(id_aux){
	
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
				if (data == "Mensaje Borrado"){
			$('#page14 ul').empty();
			$('#listafav').empty();
			$('#listafav1').empty();
		
			$('#listafav').listview('refresh', true);
			$('#listafav1').listview('refresh', true);
			listafavorito();
			}
				
				
	}
		
	}
}