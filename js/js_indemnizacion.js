$(document).ready(function() {
    $('#calc_indemnizacion').click(function(event) {
        event.preventDefault(); 

        let sueldoBase = parseFloat($('#sueldo_base').val());
        let cantAños = parseFloat($('#cant_años').val());
        let cantMeses = parseFloat($('#cant_meses').val());
        let salarioPendiente = parseFloat($('#salario_pendiente').val());
        let deudasCobros = parseFloat($('#deudas_cobros').val());

        if (isNaN(sueldoBase) || sueldoBase <= 0) {
            $('#error1').show();
        } else {
            $('#error1').hide();
        }
    
        if (isNaN(cantAños) || cantAños <= 0) {
            $('#error2').show();
        } else {
            $('#error2').hide();
        }

        if (isNaN(cantMeses) || cantMeses < 0) {
            $('#error3').show();
        } else {
            $('#error3').hide();
        }
    
        if (isNaN(salarioPendiente) || salarioPendiente < 0) {
            $('#error4').show();
        } else {
            $('#error4').hide();
        }
    
        if (isNaN(deudasCobros) || deudasCobros < 0) {
            $('#error5').show();
        } else {
            $('#error5').hide();
        }
        
        var aguinaldo = (sueldoBase / 12) * cantMeses;
        var bonoCatorce = (sueldoBase / 12)  * cantMeses;

        var indemnizacion = (sueldoBase * cantAños) + bonoCatorce + aguinaldo + salarioPendiente - deudasCobros;

        $('#result_indemnizacion').html(`<h4><strong>La indemnización es de: Q${indemnizacion.toFixed(2)}</strong></h4>`);
    });

    $('#sueldo_base').change(function() {
        $('#error1').hide();
    });

    $('#cant_años').change(function() {
        $('#error2').hide();
    });

    $('#salario_pendiente').change(function() {
        $('#error3').hide();
    });

    $('#deudas_cobros').change(function() {
        $('#error4').hide();
    });
});

