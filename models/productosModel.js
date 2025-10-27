let productos = [
  { id: 1, nombre: "Jabón", precio: 3700, stock: 10 },
  { id: 2, nombre: "Shampoo", precio: 8000, stock: 5 }
];

// Obtener todos los productos
function obtenerProductos() {
  return productos;
}

// Crear nuevo producto
function crearProducto(nuevo) {
  nuevo.id = productos.length + 1;
  productos.push(nuevo);
  return nuevo;
}

// Actualizar producto por ID
function actualizarProducto(id, datos) {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return null;
  productos[index] = { ...productos[index], ...datos };
  return productos[index];
}

// Eliminar producto por ID
function eliminarProducto(id) {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return false;
  productos.splice(index, 1);
  return true;
}

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};