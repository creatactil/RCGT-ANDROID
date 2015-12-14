function onLoad() { 
        document.addEventListener("deviceready", onDeviceReady, false);   
    } 

    function onDeviceReady() {   
   
        document.addEventListener("backbutton", onBackKeyDown, false); 
     
    } 
   
  function onConfirm(button) { 
    if(button==2){ 
      navigator.app.exitApp(); 
      } 
    } 


    function onBackKeyDown() { 
     
    if($.mobile.activePage.attr('id') == 'page1'){ 
    navigator.notification.confirm('¿Quieres cerrar la aplicación?',onConfirm,"Salir",'No,Si'); 

    }else{ 
        navigator.app.backHistory(); 
    } 

    } 