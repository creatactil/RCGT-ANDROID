function favorito(id_aux){
	
		var hid_aux = id_aux;       
        //var zcodigo = codigo;
       // var zdni = localStorage.dni;
		
	
	var r=confirm("¿Quiere añadir a Favorito la circular?")
		
	if (r==true){
	
	$.ajax({
		type: "GET",
        url: "http://rcgtapp.creatactil.com/php/favorito.php",
		data: ({id_aux: hid_aux }),
		cache: false,
        dataType: "text"
        
                     
		});
	}
		
		
		$('#page4 ul').empty();
		$('#lista').listview('refresh', true);
		$('#lista1').listview('refresh', true);
		crearLista();
		
	}