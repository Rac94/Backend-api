document.getElementById("personForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Obtener los valores de los campos de entrada
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var cedula = document.getElementById("cedula").value;
  var password = document.getElementById("password").value;
  
  // Crear una nueva fila en la tabla con los datos ingresados
  var table = document.getElementById("personTable").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();
  var nameCell = newRow.insertCell(0);
  var emailCell = newRow.insertCell(1);
  var cedulaCell = newRow.insertCell(2);
  var passwordCell = newRow.insertCell(3);
  
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  cedulaCell.innerHTML = cedula;
  passwordCell.innerHTML = password;
  
  // Limpiar los campos de entrada
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("password").value = "";
});
