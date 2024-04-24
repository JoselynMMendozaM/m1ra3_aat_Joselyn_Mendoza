
$(document).ready(function() {

    
    $("#btn-save").click(function() {
        var name = $('#name').val();
        var date = parseFloat($('#date').val());
        var puesto =  $('#puesto').val();
        var salario = parseFloat($('#salario').val());

    
        $('#tabla_datos tbody').append(`<tr><td>${name}</td><td>${date}</td><td>${puesto}</td><td>${salario}</td></tr>`) ;
        
    

    });
  
    // Eliminar Primera Fila
    $("#btn_eliminar_primera_fila").click(function() {
      $("#tabla_datos tbody tr:firt-child").remove();
    });

    // Eliminar última Fila
    $("#btn_eliminar_primera_fila").click(function() {
        $("#tabla_datos tbody tr:last-child").remove();
      });
});
