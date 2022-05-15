$(document).ready(function(){
// Functions and clases
// Show hide function jquery

    // Render first Page with menus options
    $("#main_content").html(' <div class="container" id="main_p"> <div class="row"> <div class="col-lg-4 mb-3 d-flex" id="Curso"> <div class="card" style="width: 18rem;" id="c_curso"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Curso de transito</h5> <p class="card-text">Curso de Transito en formato PDF o verlo online</p> <a class="btn btn-primary" id="download_pdf" download="Curso_de_Transito_HLO.pdf"><i class="fa fa-arrow-down"></i> PDF</i></a> <a class="btn btn-primary" id="ir_curso">Ir al curso</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex" id="documentacion"> <div class="card" style="width: 18rem;" id="card_doc"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Documentacion</h5> <p class="card-text">Documentacion adicional del curso. 1 Comprimido con las leyes y signos y link a canal de youtube con videos complementarios</p> <a href="#" class="btn btn-primary"><i class="fa fa-arrow-down"></i> RAR</i></a> <a href="#" class="btn btn-primary">Ir a Videos</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex " id="pruebas"> <div class="card" style="width: 18rem;" id=""> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Pruebas</h5> <p class="card-text">Compendio de 20 pruebas para su practica</p> <a href="#" class="btn btn-primary">Ir a las Pruebas</a> </div> </div> </div> </div> </div>');
    // button "ir al Curso"
    $("#ir_curso").click(function(){
      $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
      $("#main_content").html(
        
      )
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


// ====== scroll page animation======
  // Button go up show and hide animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > $("#tema1").offset().top) {
      $('#btn-up').fadeIn('slow');
    } else {
      $('#btn-up').fadeOut('slow');
    }
      // add css margin botton to put button on top of the footer
    if ($(this).scrollTop() > ($("#Contact").offset().top-$(window).height()+120)) {
      if ($(window).innerWidth() <= 767) {
        $('#btn-up').css("margin-bottom", "13rem")
      } else {
        $('#btn-up').css("margin-bottom", "7rem")
      }
    } else {
      $('#btn-up').css("margin-bottom", "2rem")
    }
  });





  // Animation to Indice
$("#btn-up").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#indice").offset().top
  }, 2000);
});
// ====== scroll page animation for Indice======
$("#tema_1").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema1").offset().top
  }, 2000);
});
$("#tema_2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema2").offset().top
  }, 2000);
});
$("#tema_3").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema3").offset().top
  }, 2000);
});
$("#tema_4").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema4").offset().top
  }, 2000);
});
$("#tema_5").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema5").offset().top
  }, 2000);
});
$("#tema_6").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema6").offset().top
  }, 2000);
});
$("#tema_7").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema7").offset().top
  }, 2000);
});
$("#tema_8").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema8").offset().top
  }, 2000);
});
$("#tema_9").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema9").offset().top
  }, 2000);
});
$("#tema_10").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema10").offset().top
  }, 2000);
});
$("#tema_11").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#tema11").offset().top
  }, 2000);
});

// $("#download_pdf").click(function() {
//   alert("Hello! I am an alert box!!");
// })


/* Download Button */

$('#download_pdf').click(function(e) {
    console.log("ok")
    e.preventDefault();  //stop the browser from following
    window.location.href = "Files/Curso_de_Transito_HLO.pdf";
});
// console.log(window.location.href)
})