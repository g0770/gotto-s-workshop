let andresshow = false;
let rockshow = false;
let estebanshow = false;



$(function(){

    $("#sobrenosotros").hide();
    $("#formulariodecontacto").hide();
    $("#formulariodereclamo").hide()
    $("#inicio").fadeIn();

    $(".info").hide();

    $("#inicioboton").click(function(){
        $("#sobrenosotros").fadeOut();
        $("#formulariodecontacto").fadeOut();
        $("#formulariodereclamo").fadeOut();

        $("#inicio").fadeIn();
    })

    $("#sobrenosotrosboton").click(function(){
        $("#inicio").fadeOut();
        $("#formulariodecontacto").fadeOut();
        $("#formulariodereclamo").fadeOut();

        $("#sobrenosotros").fadeIn();
    })

    $("#contactoboton").click(function(){
        $("#inicio").fadeOut();
        $("#sobrenosotros").fadeOut();
        $("#formulariodereclamo").fadeOut();

        $("#formulariodecontacto").fadeIn();
    })

    $("#andres").click(function(){
        andresshow = !andresshow
        if(andresshow){
            $(".andres").fadeOut();
        }
        else{
            $(".andres").fadeIn();
        }
    });

    $("#rock").click(function(){
        rockshow = !rockshow
        if(rockshow){
            $(".rock").fadeOut();
        }
        else{
            $(".rock").fadeIn();
        }
    });

    $("#esteban").click(function(){
        estebanshow = !estebanshow
        if(estebanshow){
            $(".esteban").fadeOut();
        }
        else{
            $(".esteban").fadeIn();
        }
    });

    $('#formcon').submit(function(e) {
        e.preventDefault();
    
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();
    
        if (nombre == '' || apellido == '' || email == '' || mensaje == '') {
          alert('Por favor complete todos los campos.');
          return false;
        }
    
        alert('Formulario enviado con éxito.');
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: {
                nombre: nombre,
                apellido: apellido ,
                email: email ,
                mensaje: mensaje
            },
            success: function(response){
                console.log(response);
            }
        });
        return true;
      });

});