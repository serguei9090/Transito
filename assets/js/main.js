// Functions and clases
// Show hide function jquery
$(function(){
    // Render first Page with menus options
    // $("#main_content").html(' <div class="container" id="main_p"> <div class="row"> <div class="col-lg-4 mb-3 d-flex" id="Curso"> <div class="card" style="width: 18rem;" id="c_curso"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Curso de transito</h5> <p class="card-text">Curso de Transito en formato PDF o verlo online</p> <a class="btn btn-primary"><i class="fa fa-arrow-down"></i> PDF</i></a> <a class="btn btn-primary" id="ir_curso">Ir al curso</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex" id="documentacion"> <div class="card" style="width: 18rem;" id="card_doc"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Documentacion</h5> <p class="card-text">Documentacion adicional del curso. 1 Comprimido con las leyes y signos y link a canal de youtube con videos complementarios</p> <a href="#" class="btn btn-primary"><i class="fa fa-arrow-down"></i> RAR</i></a> <a href="#" class="btn btn-primary">Ir a Videos</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex " id="pruebas"> <div class="card" style="width: 18rem;" id=""> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Pruebas</h5> <p class="card-text">Compendio de 20 pruebas para su practica</p> <a href="#" class="btn btn-primary">Ir a las Pruebas</a> </div> </div> </div> </div> </div>');
    // button "ir al Curso"
    $("#ir_curso").click(function(){
      $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
    });
})
});


