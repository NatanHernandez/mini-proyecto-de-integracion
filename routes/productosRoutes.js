const express = require('express');
const router = express.Router();

// Importamos autenticación y controlador
const autenBasica = require('../middlewares/autenBasica');
const {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productosController');

// GET - Listar productos
router.get('/', listarProductos);

// POST - Crear producto (protegido)
router.post('/', autenBasica, crearProducto);

// PUT - Actualizar producto (protegido)
router.put('/:id', autenBasica, actualizarProducto);

// DELETE - Eliminar producto (protegido)
router.delete('/:id', autenBasica, eliminarProducto);

module.exports = router;