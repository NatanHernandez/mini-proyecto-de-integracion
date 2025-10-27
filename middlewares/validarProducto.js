function validarProducto(req, res, next) {
  const { nombre, precio } = req.body;

  // Validar nombre
  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
    return res.status(400).json({
      mensaje: "El nombre del producto es obligatorio y debe ser un texto válido"
    });
  }

  // Validar precio
  if (precio === undefined || isNaN(precio) || precio <= 0) {
    return res.status(400).json({
      mensaje: "El precio es obligatorio, debe ser numérico y mayor que 0"
    });
  }

  next(); // Si todo está bien, continúa
}

module.exports = validarProducto;