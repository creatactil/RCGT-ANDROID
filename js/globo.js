function globo(){

  
  var conta1 = "0";  
  var xnumero3 = localStorage.numero;
			
	$.ajax({
		type: "GET",
		url: 'http://rcgtapp.creatactil.com/php/containicio.php',
		dataType: "text",
		data: {numero: xnumero3},
		success:  function(data){
						  
						  var carpeta = "http://rcgtapp.creatactil.com/imgportada/"
						 
							
							var conta1 = data;
							
						
							if(conta1 <= 5){	
									
							$(".globo").attr("src", carpeta.concat(conta1+".png"));
							}else{
							$(".globo").attr("src", carpeta.concat("5mas.png"));
							}
				
						  
						 }//fin function
		}); //fin ajax
		
		

		
}// fin globo		

