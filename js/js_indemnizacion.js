$(document).ready(function() {

    
    $("#calc_indemnizacion").click(function(event) {
        event.preventDefault();
        var sueldo_base = parseFloat($('#sueldo_base').val());
        var cant_meses = parseFloat($('#cant_meses').val());
        var salario_pendiente = parseFloat($('#salario_pendiente').val());
        var deudas_cobros = parseFloat($('#deudas_cobros').val());        


        var bono_catorce = (sueldo_base * cant_meses)/365;
        var aginaldo = (sueldo_base * cant_meses)/365;

        var indemnizacion = (sueldo_base * cant_meses) + bono_catorce + aginaldo + salario_pendiente - deudas_cobros;

        $('#result_indemnizacion').html(indemnizacion);
    });
  
    
});
