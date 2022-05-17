$(document).ready(function(){
// Functions and clases
// Show hide function jquery
// Start modal about us

  
    // Render first Page with menus options
    // $("#main_content").html(' <div class="container" id="main_p"> <div class="row"> <div class="col-lg-4 mb-3 d-flex" id="Curso"> <div class="card" style="width: 18rem;" id="c_curso"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Curso de transito</h5> <p class="card-text">Curso de Transito en formato PDF o verlo online</p> <a class="btn btn-primary" id="download_pdf" download="Curso_de_Transito_HLO.pdf"+><i class="fa fa-arrow-down"></i> PDF</i></a> <a class="btn btn-primary" id="ir_curso">Ir al curso</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex" id="documentacion"> <div class="card" style="width: 18rem;" id="card_doc"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Documentacion</h5> <p class="card-text">Documentacion adicional del curso. Comprimido con las leyes y signos.  Link a canal de youtube con videos complementarios</p> <a href="#" class="btn btn-primary" id="download_rar"><i class="fa fa-arrow-down"></i> RAR</i></a> <a href="#" class="btn btn-primary" id="youtube">Ir a Videos</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex " id="pruebas"> <div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Pruebas</h5> <p class="card-text">Compendio de 20 pruebas para su practica</p> <a href="#" class="btn btn-primary start_prueba" id="start_prueba">Ir a las Pruebas</a> </div> </div> </div> </div> </div>');
    // button "navbar logot inicio and for all button to go to start page"
    $(".home").click(function(){
      $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
      location.reload(true)
    });
  });
    
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

/* Download Button */
// Download PDF
$('#download_pdf').click(function(e) {
    e.preventDefault();  //stop the browser from following
    // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
    window.open('Files/Curso_de_Transito_HLO.pdf', '_blank')
});
// Download RAR
$('#download_rar').click(function(e) {
  e.preventDefault();  //stop the browser from following
  // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
  window.open('Files/Curso_de_Transito.rar')
});
// Go to youtube Channel or other videos streaming sites
$('#youtube').click(function(e) {
  e.preventDefault();  //stop the browser from following
  // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
  window.open('https://google.com', '_blank')
});


// ===== Controlador de las pruebas =======
let counter=0
$( ".submit" ).on( "click", function() {
  if ($("input:checked").val() == $(".card").attr("id")){
    $("input:checked").addClass("bg-success border-success")
    $("#revisar").replaceWith('<a href="#" class="btn btn-success submit" id="siguiente">Siguiente</a>')
    $("#imagen").replaceWith('<i class="fa fa-check" aria-hidden="true"></i>')
    counter+=5
} else {
    $("input").each(function(){
      if ($(this).val() == $(".card").attr("id")){
        // $(this).removeClass("bg-danger border-danger")
        $(this).addClass("bg-success border-success")
        
    } else {
      $(this).addClass("bg-danger border-danger")
    }
    });
    $("#revisar").after('<a href="#" class="btn btn-danger submit" id="respuesta">Respuesta</a>') //engtra en modal
    $("#revisar").replaceWith('<a href="#" class="btn btn-primary submit" id="siguiente">Siguiente</a>') //pasa a la siguiente pregunta
    $("#imagen").replaceWith('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>')
}
$("input").each(function(){
  $(this).attr("disabled", true)
})
});





});