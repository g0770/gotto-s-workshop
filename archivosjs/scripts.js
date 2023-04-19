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

    $("#reclamoboton").click(function(){
        $("#inicio").fadeOut();
        $("#sobrenosotros").fadeOut();
        $("#formulariodecontacto").fadeOut();

        $("#formulariodereclamo").fadeIn();
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


      //INTENTO DE FORMULARIO

      var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

    var exportBtn = $('#exportBtn');

    
    exportBtn.click(function() {
        
        var name = $('#nombrerec').val();
        var lastname = $('#apellidorec').val();
        var email = $('#emailrec').val();
        var message = $('#descrec').val();
        var fecha = $('#fechareclamo').val();
        
        
        var doc = new jsPDF();
        
        
        doc.text('Nombre: ' + name, 20, 20);
        doc.text('Apellido: ' + lastname, 20, 30);
        doc.text('Email: ' + email, 20, 40);
        doc.text('Mensaje: ' + message, 20, 50);
        doc.text('Fecha reclamo: ' + fecha, 20, 60);
        
        
        doc.save('formulario.pdf');
    });
});