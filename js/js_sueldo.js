$(document).ready(function() {
    $('#total_ganado').click(function(event) {
        event.preventDefault(); 

        var salario = $('#salario').val();
        var bonificacion = $('#bonificacion').val();
        var comisiones = $('#comisiones').val();

        if (salario.trim() === '' || bonificacion.trim() === '' || comisiones.trim() === '') {
            $('#error1').toggle(salario.trim() === '');
            $('#error2').toggle(bonificacion.trim() === '');
            $('#error3').toggle(comisiones.trim() === '');
            return;
        }

        var igss = (salario * 4.83)/100;
        $('#resultado_igss').html(`<h4><strong>${igss.toFixed(2)}</strong></h4>`);


        var totalGanado = parseFloat(salario) + parseFloat(bonificacion) + parseFloat(comisiones);
        $('#resultado_ganado').html(`<h4><strong>El total ganado es de: Q${totalGanado.toFixed(2)}</strong></h4>`);

    });

    $('#salario').change(function() {
        $('#error1').hide();
    });

    $('#bonificacion').change(function() {
        $('#error2').hide();
    });

    $('#comisiones').change(function() {
        $('#error3').hide();
    });

    
    $('#calc_descuentos').click(function(event) {
        event.preventDefault(); 
          
        var ahorro = parseFloat($('#ahorro').val().trim());
        var igss = parseFloat($('#resultado_igss').text().trim());
        var prestamosDescuentos = parseFloat($('#prestamos-descuentos').val().trim());
          
        if (isNaN(ahorro) || ahorro <= 0 || isNaN(prestamosDescuentos) || prestamosDescuentos <= 0) {
            mostrarErrores(ahorro, prestamosDescuentos);
            return;
        }
          
        limpiarErrores();
          
        var totalDescuentos = ahorro + igss + prestamosDescuentos;
        $('#resultado_descuentos').html(`<h4><strong>El total de descuentos es de: Q${totalDescuentos.toFixed(2)}</strong></h4>`);
    });
    
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
          
    function limpiarErrores() {
        $('#error4').hide();
        $('#error5').hide();
    }
          
    $('#ahorro').change(function() {
        $('#error4').hide();
    });
    
    $('#prestamos-descuentos').change(function() {
        $('#error5').hide();
    });
    
      
    $('#sueldo_liquido').click(function(event) {
        event.preventDefault(); 
    
        var totalGanadoText = $('#resultado_ganado').text();
        var totalDescuentosText = $('#resultado_descuentos').text();
    
        var totalGanadoMatch = totalGanadoText.match(/\d+(\.\d+)?/);
        var totalDescuentosMatch = totalDescuentosText.match(/\d+(\.\d+)?/);
    
        if (!totalGanadoMatch || !totalDescuentosMatch) {
            console.error('No se pudieron extraer los números de los resultados.');
            return;
        }
    
        var totalGanado = parseFloat(totalGanadoMatch[0]);
        var totalDescuentos = parseFloat(totalDescuentosMatch[0]);
    
        var sueldoLiquido = totalGanado - totalDescuentos;
        $('#resultado_sueldo_liquido').html(`<h4><strong>El sueldo líquido es de: Q${sueldoLiquido.toFixed(2)}</strong></h4>`);
    });
    
});





