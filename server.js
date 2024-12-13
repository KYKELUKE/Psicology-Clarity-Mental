const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para acceder a Inicio.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Inicio.html"));
});

// Iniciar el servidor en el puerto 5501
app.listen(5501, () => {
  console.log("Servidor corriendo en http://127.0.0.1:5501");
});
