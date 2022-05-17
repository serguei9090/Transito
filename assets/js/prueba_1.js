$(document).ready(function(){

// Prueba 1
$(".start_prueba").click(function(){
  $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
  $("#main_content").html("<p>test</p>")
});
});








});