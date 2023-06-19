const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar el middleware para servir archivos estáticos
app.use(express.static('public'));


// Configurar el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta POST para agregar una persona
app.post('/personas', (req, res) => {
  // Validar los campos de entrada
  const { name, email, cedula, password } = req.body;
  
  if (!name || !email || !cedula || !password) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
  
  // Aquí puedes realizar más validaciones según tus necesidades
  // Por ejemplo, verificar si el correo o la cédula ya existen en la base de datos
  
  // Agregar la persona a la base de datos o almacenarla en algún lugar
  // ...
  
  return res.status(201).json({ message: 'Persona agregada exitosamente' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
