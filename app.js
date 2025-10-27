const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Importar autenticación y rutas
const autenBasica = require("./middlewares/autenBasica");
const productosRoutes = require("./routes/productosRoutes");

// Rutas protegidas con autenticación básica
app.use("/api/productos", autenBasica, productosRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

// Iniciar el servidor solo si NO está en entorno de prueba
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

// 👇 ESTA LÍNEA ES LA CLAVE
module.exports = app;
