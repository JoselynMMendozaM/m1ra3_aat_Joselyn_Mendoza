$(document).ready(function() {
    // Acción al hacer click en el botón "calcular indemnizacion"
    $('#calc_indemnizacion').click(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de los inputs
        var sueldoBase = parseFloat($('#sueldo_base').val());
        var cantAños = parseFloat($('#cant_años').val());
        var salarioPendiente = parseFloat($('#salario_pendiente').val());
        var deudasCobros = parseFloat($('#deudas_cobros').val());

        // Validar que los campos no estén vacíos y sean números válidos
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
    
        if (isNaN(salarioPendiente) || salarioPendiente < 0) {
            $('#error3').show();
        } else {
            $('#error3').hide();
        }
    
        if (isNaN(deudasCobros) || deudasCobros < 0) {
            $('#error4').show();
        } else {
            $('#error4').hide();
        }

        // Calcular el aguinaldo y el bono catorce
        var cantMeses = (cantAños * 12);
        var aguinaldo = (sueldoBase / 12) * cantMeses;
        var bonoCatorce = (sueldoBase / 12)  * cantMeses;

        // Calcular la indemnización
        var indemnizacion = (sueldoBase * cantAños) + bonoCatorce + aguinaldo + salarioPendiente - deudasCobros;

        // Mostrar el resultado en el elemento HTML
        $('#result_indemnizacion').html(`<h4><strong>La indemnización es de: Q${indemnizacion.toFixed(2)}</strong></h4>`);
    });

    // Limpiar errores al cambiar el contenido de los inputs
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

