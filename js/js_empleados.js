document.getElementById('btn-enviar').addEventListener('click', function() {
    // Obtener los valores ingresados por el usuario
    var id = document.getElementById('id-empleado').value;
    var nombre = document.getElementById('nombre-empleado').value;
    var apellido = document.getElementById('apellido-empleado').value;

    // Crear una nueva fila con los datos ingresados
    var nuevaFila = '<tr><td>' + id + '</td><td>' + nombre + '</td><td>' + apellido + '</td></tr>';

    // Agregar la nueva fila al cuerpo de la tabla
    var tabla = document.getElementById('tabla-empleados').getElementsByTagName('tbody')[0];
    tabla.innerHTML += nuevaFila;

    // Limpiar los campos de entrada después de agregar la fila
    document.getElementById('id-empleado').value = '';
    document.getElementById('nombre-empleado').value = '';
    document.getElementById('apellido-empleado').value = '';
});