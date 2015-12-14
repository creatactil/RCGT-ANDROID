function listaweb(data) {
			
			//$.mobile.changePage("#page6", {transition: "slide"},
           // true,
            //true);
				
    		//$('#listaweb').empty();
                                          
			//var xdni = localStorage.dni;
			//$("#carga35").show();
			
			$.ajax({
		url: 'http:///listaweb.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
		
			
			
										
			$('#listaweb').append(			
			
			'<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="abrirweb(\''+item.web+'\')" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/'+item.codigo+'.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
			'<h3 style="margin-top: 0em; margin-left: -1.4em ">'+item.denominacion+'</h3>'+
			'<p style="margin-left: -1.8em">'+ 'Código del Centro: '+''+item.codigo+'<br>'+
			''+ 'Web: '+''+item.web+'</p>'+				
			'</a>'+
			'</li>'
			
			/*'<li class="ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-up-c">'+
			'<div class="ui-btn-inner ui-li ui-li-has-alt" aria-hidden="true">'+
			'<div class="ui-btn-text">'+
			'<a class="ui-link-inherit" href="#" onclick="abrirweb(\''+item.web+'\')">'+
			'<img src="http://mc.creatactil.com/logo/'+item.codigo+'.jpg" class="ui-li-thumb" style="margin-top: 0.4em">'+            
			
			'<h3 class="ui-li-heading" style="margin-left: 4.5em">'+item.denominacion+'</h3><br>'+
            '<p class="ui-li-desc" style="margin-left: 5.3em">'+ 'Codigo del Centro: '+''+item.codigo+'</p>'+
            '<p class="ui-li-desc" style="margin-left: 5.3em">'+ 'Web: '+''+item.web+'</p>'+
			'<span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span>'+
			'</a></div></div>'*/
			
			);
			
			
			$("#carga35").hide();
										
		 /*Pagina dinamica
		    content = '<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a">' +
					'<div data-role="header">' +
					'<h1>' + item.titulo + '</h1>' +
					'</div>' +
					'<div data-role="content" id="contenido">' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result">' +
                                  '<label>Nº de Registro: '+item.registro+'</label>'+
                                  '<br>'+
                                  '<label>Nombre del Centro: '+item.nombre_centro+'</label>'+
                                  '<br>'+
                                  '<p>CIRCULAR: ' + item.texto + '</p>' +
                                  '</div>' +
                                '</p>' +
								'</div>';
	    */

			
			 
		});
			 //$('body').append(content).trigger('refresh');
			//$(index).page();
			
		}
		
		});
	
    }  

 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}

function abrirweb(ruta){
	
	var xruta = ruta;
	
	window.open(xruta,'_blank','location=no','closebuttoncaption=Return');
	
	}