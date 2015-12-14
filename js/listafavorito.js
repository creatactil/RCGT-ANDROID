function listafavorito() {
				
    	var xnumero = localStorage.numero;
		$.mobile.changePage("#page14", {transition: "slide"},
            true,
            true);
	
			
			$('#page14 ul').empty();
            $("#carga14").show();
		                 
						
		$.ajax({
		url: 'http://rcgtapp.creatactil.com/php/listafavorito.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {numero: xnumero},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
			var registro = item.registro;
            var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var cial = item.cial;
			
			var verde = "#006837";
			
			if(estado==0){
				var tema = "a";
				var listo2 = "#listafav1";
				
				}else{	
				var tema = "a";
				var listo2 = "#listafav1";}
									
			$(listo2).append(
			
						
			'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 60px"><a href="#" class="ui-btn" onclick="changePage(id' + index + '), contador(\''+registro+'\');" style="height: 60px; padding:0; background-color:#fafafa" >'+
			'<img src="imagenes/icono.png" class="ui-li-thumb" style="margin-top: 5px; margin-left: 5px; height: 50px">'+
		'<h2 style="margin-left:60px; margin-top:2px; font-size: 0.8em; color:#000000" >'+item.titulo+'</h2>'+
		'<p style="margin-left:60px; padding:0; color:'+verde+'; font-size: 0.7em ">'+'Nº Registro:  '+item.registro+'<br>'+
    	''+'Fecha: '+''+item.fecha+'</p>'+
		
		'<a data-icon="delete" class="ui-btn ui-btn-icon-notext ui-icon-delete" title=""></a>'+
        '<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" title="" onClick="borrafavorito(\''+item.id_aux+'\' )" style="height: 62px; background-color:#fafafa">'+
		'</a>'+
    	'</li>'
						
			
			);
			
			
			
			
			
										
		 /*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="id' + index + '" data-url="id' + index + '" data-theme="a" >' +
					'<div data-role="header" data-theme="b">' + 
					'<a href="#page14" onClick="listafavorito()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1>' + item.titulo + '</h1>' +
					'</div>' +
					
					
									
					
					'<div data-role="content" id="contenido14">' +
					'<p style="margin:-1em; padding:0;">' +
                    '<div data-role="fieldcontain" class="result2">' +
                                  '<p style="margin:0; padding:0; color:'+verde+'; font-size: 0.9em">Nº de Registro: '+item.registro+''+
                                  '<br>'+
								  'Fecha: '+item.fecha+'</p>'+
								  '<p>'+ item.texto + '</p>' +
								  '<br>'+
                                  '<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
								  '<br>'+
								  '<br>'+
								  '<br>'+
								  '<a href="#page11" style="color:#900"  data-rel="dialog" onClick="textofirma(\''+item.registro+'\' ), textofirma3(\''+item.cial+'\' ), textofirma4(\''+item.codigo+'\' ) ">'+item.firma+'</a>'+
								   
                                  '</div>' +
                                '</p>' +
								'</div>';
	   
			
			 $('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga14").hide(); 
			
		}
		
		});
			$('#piepagina14').append('<div data-role="footer" data-theme="b" data-position="fixed" style="background:#ccc" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup ui-fixed-hidden">'+
    '<div data-role="navbar" class="ui-navbar" role="navigation">'+
    '<ul class="ui-grid-c">'+
    '<li class="ui-block-a"><a href="#page1" data-transition="slide" data-role="button" onclick="globo()" data-icon="home" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button" >Inicio</a></li>'+
    '<li class="ui-block-b"><a href="#" data-role="button" onclick="crearLista()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button" ><img src="" class="globo" style="float:left; width:15px;" >Circulares</a></li>'+
    '<li class="ui-block-c"><a href="#" data-role="button" onclick="listafavorito()" data-icon="star" class="ui-link ui-btn ui-icon-star ui-btn-icon-top ui-shadow ui-corner-all" role="button" >Favoritos</a></li>'+
    '<li class="ui-block-d"><a href="#page5" data-role="button" onclick="" data-icon="info" class="ui-link ui-btn ui-icon-info ui-btn-icon-top ui-shadow ui-corner-all" role="button" >Ayuda</a></li>'+
    '</ul>'+
	'</div>'
									);
	
			
		  	$('#listafav').listview('refresh', true);
			$('#listafav1').listview('refresh', true);
			globo();
    } 
	 



 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
	
function borrar2(id_aux2){
	
	var elidaux2 = id_aux2; 
	$("#id_aux4").val(elidaux2);	
	
	}
	
