 
var scrollUpBtn = {
    onReady: function() {
       $('#strip>a').click( scrollUpBtn.scrollUpWithAnimation );
       
    }, 
    scrollUpWithAnimation: function( event ) {
        event.preventDefault();
		 $("html, body").animate({ scrollTop: 0 }, 1000);
   } //scrollUpWithAnimation
};	

var menuBtn = {
    onReady: function() {
        $( "#menu-btn" ).click( menuBtn.toggleMenu );
    },
    toggleMenu: function( event ) {
        event.preventDefault();
		 $("#toggle-menu").slideToggle(500);
    }
};
 
var contenido_Mostrado_Con_Flechas = {
    onReady: function() {
    	console.log("hola")
      $( ".contenido > #fderecha" ).click( contenido_Mostrado_Con_Flechas.mostrarCajaIzq );
      $( ".contenido > #fizquierda" ).click( contenido_Mostrado_Con_Flechas.mostrarCajaDer );
       
    }, 
    mostrarCajaIzq: function( event ) {
    	event.preventDefault();
		 $(this).parent(".contenido").parent(".caja-izq").next(".info").slideToggle(500);
  	 } ,
    mostrarCajaDer: function( event ) {
		event.preventDefault();
		$(this).parent(".contenido").parent(".caja-der").next(".info-i").slideToggle(500);
  	 } 
};	

var smaller_Header_When_scroll = {
    onReady: function() {
      $(window).scroll( smaller_Header_When_scroll.smallerHeader);
    },

    smallerHeader: function(){
       var scroll = $(window).scrollTop();
       var headerBar = $("header > .container , header"); 

        if (scroll >= 400) {
            headerBar.addClass('smaller');
            $("#menu-btn").addClass('smallerBtn');
        } else {
            headerBar.removeClass("smaller");
            $("#menu-btn").removeClass('smallerBtn');
        }
    } // smallerHeader

};

 

$(document).ready(function() {

 

    scrollUpBtn.onReady();
    menuBtn.onReady();
    contenido_Mostrado_Con_Flechas.onReady();
    smaller_Header_When_scroll.onReady();

 
//     $( window ).resize(function() {
//   console.log( $( window ).width() );
//   if($( window ).width() < 1146 ){
//     console.log("menor a 1146");
//     $(".projectos").removeClass("projectos");
//   }
// });
     if ($( window ).width() >1146) {

      
            $("#fizquierda > i.fa-arrow-circle-o-down ").addClass("fa-arrow-circle-o-left ");
            $("#fizquierda > i.fa-arrow-circle-o-left ").removeClass("fa-arrow-circle-o-down ");
            $("#fderecha > i.fa-arrow-circle-o-down ").addClass("fa-arrow-circle-o-right ");
            $("#fderecha > i.fa-arrow-circle-o-right ").removeClass("fa-arrow-circle-o-down ");

      }

      else  {

       
      $("#fizquierda > i.fa-arrow-circle-o-left ").addClass("fa-arrow-circle-o-down ");
        $("#fizquierda > i.fa-arrow-circle-o-left ").removeClass("fa-arrow-circle-o-left ");
         $("#fderecha > i.fa-arrow-circle-o-right ").addClass("fa-arrow-circle-o-down ");
        $("#fderecha > i.fa-arrow-circle-o-right ").removeClass("fa-arrow-circle-o-right ");
      
      }

$( window ).resize(function() {
      if ($( window ).width() >1146) {

       
      $("#fizquierda > i.fa-arrow-circle-o-down ").addClass("fa-arrow-circle-o-left ");
      $("#fizquierda > i.fa-arrow-circle-o-left ").removeClass("fa-arrow-circle-o-down ");

       $("#fderecha > i.fa-arrow-circle-o-down ").addClass("fa-arrow-circle-o-right ");
            $("#fderecha > i.fa-arrow-circle-o-right ").removeClass("fa-arrow-circle-o-down ");
      

      }

      else  {

      
      $("#fizquierda > i.fa-arrow-circle-o-left ").addClass("fa-arrow-circle-o-down ");
      $("#fizquierda > i.fa-arrow-circle-o-left ").removeClass("fa-arrow-circle-o-left ");

        $("#fderecha > i.fa-arrow-circle-o-right ").addClass("fa-arrow-circle-o-down ");
        $("#fderecha > i.fa-arrow-circle-o-right ").removeClass("fa-arrow-circle-o-right ");


      }
    });

}); 
  