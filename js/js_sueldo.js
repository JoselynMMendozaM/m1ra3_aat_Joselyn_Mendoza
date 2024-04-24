$(document).ready(function() {

    
    $("#total_ganado").click(function(event) {
        event.preventDefault();
        var salario = parseFloat($('#salario').val());
        var bonificacion = parseFloat($('#bonoficacion').val());
        var comisiones = parseFloat($('#comisiones').val());       


        var sueldo = salario + bonificacion + comisiones;
        
        $('#result_ganado').html(sueldo);
    });

    $("#calc_descuentos").click(function(event) {
        event.preventDefault();
        var ahorro = parseFloat($('#ahorro').val());
        var igss = parseFloat($('#igss').val());
        var prestamosDescuentos = parseFloat($('#salario_pendiente').val());

        var descuentos = ahorro + igss + prestamosDescuentos;

        $('#result_descuentos').html(descuentos);
    });
  
    $("#sueldo_liquido").click(function(event) {
        event.preventDefault();

        var sueldoLiquido = sueldo - descuentos;

        $('#result_sueldo_liquido').html(sueldoLiquido);


    });
    
});

