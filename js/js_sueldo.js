$(document).ready(function() {
    // Acción al hacer click en el botón "TOTAL GANADO"
    $('#total_ganado').click(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de los inputs
        var salario = $('#salario').val();
        var bonificacion = $('#bonificacion').val();
        var comisiones = $('#comisiones').val();

        // Validar que los campos no estén vacíos
        if (salario.trim() === '' || bonificacion.trim() === '' || comisiones.trim() === '') {
            $('#error1').toggle(salario.trim() === '');
            $('#error2').toggle(bonificacion.trim() === '');
            $('#error3').toggle(comisiones.trim() === '');
            return;
        }

        var igss = (salario * 4.83)/100;
        $('#resultado_igss').html(`<h4><strong>${igss.toFixed(2)}</strong></h4>`);


        // Calcular el total ganado y mostrarlo
        var totalGanado = parseFloat(salario) + parseFloat(bonificacion) + parseFloat(comisiones);
        $('#resultado_ganado').html(`<h4><strong>El total ganado es de: Q${totalGanado.toFixed(2)}</strong></h4>`);

    });

    // Acción al escribir en el campo "SALARIO"
    $('#salario').change(function() {
        $('#error1').hide();
    });

    // Acción al escribir en el campo "BONIFICACIÓN"
    $('#bonificacion').change(function() {
        $('#error2').hide();
    });

    // Acción al escribir en el campo "COMISIONES"
    $('#comisiones').change(function() {
        $('#error3').hide();
    });

    // Similar para los campos de EGRESOS

    // Acción al hacer click en el botón "TOTAL DESCUENTOS"
    $('#calc_descuentos').click(function(event) {
        event.preventDefault(); // Evita el envío del formulario
          
        // Obtener los valores de los inputs
        var ahorro = parseFloat($('#ahorro').val().trim());
        var igss = parseFloat($('#resultado_igss').text().trim());
        var prestamosDescuentos = parseFloat($('#prestamos-descuentos').val().trim());
          
        // Validar que los campos no estén vacíos y sean números válidos
        if (isNaN(ahorro) || ahorro <= 0 || isNaN(prestamosDescuentos) || prestamosDescuentos <= 0) {
            mostrarErrores(ahorro, prestamosDescuentos);
            return;
        }
          
        // Limpiar mensajes de error previos
        limpiarErrores();
          
        // Calcular el total de descuentos
        var totalDescuentos = ahorro + igss + prestamosDescuentos;
          
        // Mostrar el total de descuentos
        $('#resultado_descuentos').html(`<h4><strong>El total de descuentos es de: Q${totalDescuentos.toFixed(2)}</strong></h4>`);
    });
    
    // Función para mostrar mensajes de error
    function mostrarErrores(ahorro, prestamosDescuentos) {
        if (isNaN(ahorro) || ahorro <= 0) {
            $('#error4').show();
        } else {
            $('#error4').hide();
        }
          
        if (isNaN(prestamosDescuentos) || prestamosDescuentos <= 0) {
            $('#error5').show();
        } else {
            $('#error5').hide();
        }
    }
          
    // Función para limpiar mensajes de error
    function limpiarErrores() {
        $('#error4').hide();
        $('#error5').hide();
    }
          
    // Acciones al escribir en los campos de entrada (no se han modificado)
    $('#ahorro').change(function() {
        $('#error4').hide();
    });
    
    $('#prestamos-descuentos').change(function() {
        $('#error5').hide();
    });
    
      
    // Acción al hacer click en el botón "OBTENER SUELDO LÍQUIDO"
    $('#sueldo_liquido').click(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
    
        // Obtener los valores de los resultados anteriores de forma más robusta
        var totalGanadoText = $('#resultado_ganado').text();
        var totalDescuentosText = $('#resultado_descuentos').text();
    
        var totalGanadoMatch = totalGanadoText.match(/\d+(\.\d+)?/);
        var totalDescuentosMatch = totalDescuentosText.match(/\d+(\.\d+)?/);
    
        if (!totalGanadoMatch || !totalDescuentosMatch) {
            // Manejar el caso de que no se encuentren los números
            console.error('No se pudieron extraer los números de los resultados.');
            return;
        }
    
        var totalGanado = parseFloat(totalGanadoMatch[0]);
        var totalDescuentos = parseFloat(totalDescuentosMatch[0]);
    
        // Calcular el sueldo líquido y mostrarlo
        var sueldoLiquido = totalGanado - totalDescuentos;
        $('#resultado_sueldo_liquido').html(`<h4><strong>El sueldo líquido es de: Q${sueldoLiquido.toFixed(2)}</strong></h4>`);
    });
    
});





