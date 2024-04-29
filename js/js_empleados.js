$(document).ready(function() {

  $("#btn-save").click(function(event) {
      event.preventDefault(); 
      let name = $('#name').val();
      let date = parseFloat($('#date').val());
      let puesto = $('#puesto').val();
      let salario = parseFloat($('#salario').val());

      if (name === '') {
        $('#error1').show();
      }

      if (isNaN(date)) {
        $('#error2').show();
      }

      if (puesto === '') {
        $('#error3').show();
      }

      if (isNaN(salario)) {
        $('#error4').show();
      }

      $('#name').change(function() {
        $('#error1').hide();
    });

    // Acción al escribir en el campo "BONIFICACIÓN"
    $('#date').change(function() {
        $('#error2').hide();
    });

    // Acción al escribir en el campo "COMISIONES"
    $('#puesto').change(function() {
        $('#error3').hide();
    });

    $('#salario').change(function() {
      $('#error4').hide();
  });

      if ($('#error1').is(':visible') || $('#error2').is(':visible') || $('#error3').is(':visible') || $('#error4').is(':visible')) {
        return;
      }else{
        $('#tabla_datos tbody').append(`<tr><td>${name}</td><td>${date}</td><td>${puesto}</td><td>${salario}</td></tr>`);

      }


      $('#name').val('');
      $('#date').val('');
      $('#puesto').val('');
      $('#salario').val('');

  });

  $("#btn_eliminar_primera_fila").click(function() {
      $("#tabla_datos tbody tr:first-child").remove();
  });

  $("#btn_eliminar_ultima_fila").click(function() {
      $("#tabla_datos tbody tr:last-child").remove();
  });

});
