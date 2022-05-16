$(document).ready(function(){
  $( "input" ).on( "click", function() {
    $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
  });
$("#start_prueba").click(function(){
  $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
  $("#main_content").html("<p>test</p>")




  // end of function
});
});
});