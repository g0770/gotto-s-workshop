let andresshow = false;
let rockshow = false;
let estebanshow = false;



$(function(){

    $("#sobrenosotros").hide();
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

});