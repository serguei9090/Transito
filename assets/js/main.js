$(document).ready(function(){

// ====Variables=====
var question_num=0
var test_num=0
var counter=0
var result=0
// Render first Page with menus options
$("#main_content").html(' <div class="container" id="main_p"> <div class="row"> <div class="col-lg-4 mb-3 d-flex" id="Curso"> <div class="card" style="width: 18rem;" id="c_curso"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Curso de transito</h5> <p class="card-text">Curso de Transito en formato PDF o verlo online</p> <a class="btn btn-primary" id="download_pdf" download="Curso_de_Transito_HLO.pdf"+><i class="fa fa-arrow-down"></i> PDF</i></a> <a class="btn btn-primary" id="ir_curso">Ir al curso</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex" id="documentacion"> <div class="card" style="width: 18rem;" id="card_doc"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Documentacion</h5> <p class="card-text">Documentacion adicional del curso. Comprimido con las leyes y signos.  Link a canal de youtube con videos complementarios</p> <a href="#" class="btn btn-primary" id="download_rar"><i class="fa fa-arrow-down"></i> RAR</i></a> <a href="#" class="btn btn-primary" id="youtube">Ir a Videos</a> </div> </div> </div> <div class="col-lg-4 mb-3 d-flex " id="pruebas"> <div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Pruebas</h5> <p class="card-text">Compendio de 20 pruebas para su practica</p> <a href="#" class="btn btn-primary start_prueba" id="start_prueba">Ir a las Pruebas</a> </div> </div> </div> </div> </div>');


//navbar hide or show on scroll
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


//=================== Functions ================


// countdown Timer function
function timer(){
  $('.countdown').show()
  var timer2 = "40:01";
  window.interval = setInterval(function () {
      var timer = timer2.split(':');
      //by parsing integer, I avoid all extra string processing
      var minutes = parseInt(timer[0], 10);
      var seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      //minutes = (minutes < 10) ?  minutes : minutes;
      $('.countdown').html(minutes + ':' + seconds);
      if (minutes < 0) clearInterval(interval);
      if (minutes < 10) $('.countdown').css("color", "#dc3545");
      //check if both minutes and seconds are 0
      if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
      timer2 = minutes + ':' + seconds;
      if ((seconds <= 0) && (minutes <= 0)) {
        finish_test()
      };
  }, 1000);
};


// hide and reset timer function
function timer_off(){
  $('.countdown').hide()
  clearInterval(interval)
}
timer()
timer_off()
// Start test Pruebas
function start_test () {
  $(".start_prueba").click(function(){
    timer_off()
    $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
    if (test_num>20) test_num=0;
    $("#main_content").html(pruebas[test_num][question_num])
    counter=0
    timer();
    controlador();
  })
  });
};


 // controlador de acceso a las pruebas desde navbar menu
  function navpruebas(){
    $(".navPrueba").click(function(){
      results=($(this).attr("id")).split("_")
      result=results[1]
        timer_off()
        question_num=0
        test_num=result
        $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
        $("#main_content").html(pruebas[test_num][question_num])
        counter=0
        timer();
        navpruebas()
        controlador();
      })
      });
  }

navpruebas()


// ===== Controlador de las pruebas =======
function controlador(){
  $( ".submit" ).on( "click", function() { //button "revisar"
    if ($("input:checked").val() == $(".card").attr("id")){ //check if is the correct answer logic
      counter+=5
      $("input:checked").addClass("bg-success border-success") // add boostrap class
      $("#revisar").replaceWith('<a href="#" class="btn btn-success siguiente" id="siguiente">Siguiente</a>') //replace button for next question button
      if (question_num > 18){
        $("#siguiente").text('Finalizar la prueba') //replace text button for finish test
      }
      $("#imagen").replaceWith('<i class="fa fa-check btn_icon" aria-hidden="true"></i>') //replace image for check icon
  
  } else { //if is wrong answer
      $("input").each(function(){ //loop each input
        if ($(this).val() == $(".card").attr("id")){ //check if is the correct answer logic
          $(this).addClass("bg-success border-success")// add boostrap class
      } else {
        $(this).addClass("bg-danger border-danger") // add boostrap class danger
      }
      });
      $("#revisar").after('<button type="button" class="btn btn-danger respuesta" data-bs-toggle="modal" data-bs-target="#answer_Modal">Respuesta</button>') //open modal with info for answer
      $("#revisar").replaceWith('<a href="#" class="btn btn-warning siguiente" id="siguiente">Siguiente</a>') //replace button for next question button
      if (question_num > 18){
        $("#siguiente").text('Finalizar la prueba') //replace button for finish test
      }
      $("#imagen").replaceWith('<i class="fa fa-exclamation-triangle btn_icon" aria-hidden="true"></i>') //replace image for Triange worng Icon
  
  }
  $("input").each(function(){ //disable all radios option
    $(this).attr("disabled", true)
  })
  
  // Next question
  $(".siguiente").click(function(){
    question_num+=1
    //Finished test repeat if fail or next
    if (question_num > 19){
      finish_test()
    } else {
    $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');
    $("#main_content").html(pruebas[test_num][question_num])
    controlador();
    // si la pregunta es numero 20(19) entonces sustituir la tarjeta por un div con la puntuacion final y si es aprobado o no
  });
    };
  });
  });
  // button "navbar logo, inicio and for all button to go to start page"
  $(".home").click(function(){ //home page
    $("#main_p").fadeToggle( "slow", "linear", function() {$(this).toggleClass('d-none');//fade effect animation
    location.reload(true) //reloan scripts for well function of all buttons
  });
});
  }

// for finish test by time or answer all
function finish_test(){
  timer_off()
  $(".card").replaceWith('<div class="row"><h1 class="counter score" data-count=\"' + counter + ' \">0</h1></div>') //replace card for result score
  $(".counter").after('<a href="#" class="btn btn-primary start_prueba" id="siguiente_prueba">Siguiente prueba</a>') //add button to next test
  test_num+=1
  question_num=0
  if (counter > 80) {
    $(".counter").before('<h1 class="display-1 text-uppercase fw-bold aprobado score ">Felicidades!! Has Aprobado</h1>') //add title if pass the text
    start_test()
  } else {
    $(".counter").before('<h1 class="display-1 text-uppercase fw-bold desaprobado score ">Lo Siento Repite de nuevo</h1>') //add title if fail the test
    $(".counter").after('<a href="#" class="btn btn-danger start_prueba" id="repetir_prueba">Repetir la prueba</a> ') //add button to repeat test
    $( "#repetir_prueba" ).on( "click", function() {
      test_num-=1
    })
    start_test()
  }
  // Countup Score
  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
      {
        duration: 1000,
        // easing: 'linear',
        step: function () {
          $this.text(Math.ceil(this.countNum));
          // $(this).text(Math.ceil(now));
        },
        // complete: function () {
        //   $this.text(this.countNum);
        //   //alert('finished');
        // }
      });
  });
};

start_test()

/* Download Button */
// Download PDF
$('#download_pdf').click(function(e) {
    e.preventDefault();  //stop the browser from following
    // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
    window.open('Files/Curso_de_Transito_HLO.pdf', '_blank')
});
// Download RAR
// $('#download_rar').click(function(e) {
//   e.preventDefault();  //stop the browser from following
//   // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
//   window.open('Files/Curso_de_Transito.rar')
// });
$('#download_rar').attr({target: '_blank', 
                    href  : 'Files/Curso_de_Transito.rar'});
// Go to youtube Channel or other videos streaming sites
$('#youtube').click(function(e) {
  e.preventDefault();  //stop the browser from following
  // window.location.href = "Files/Curso_de_Transito_HLO.pdf";
  window.open('https://google.com', '_blank')
});






// logick to check at what test Im I to sum
// var result=($(".card-title").attr("id")).split("_")
// console.log(result[1])


});