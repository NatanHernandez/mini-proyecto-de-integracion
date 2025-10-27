// controllers/productosController.js

const productos = [
  { id: 1, nombre: 'Jabón', precio: 3700 },
  { id: 2, nombre: 'Shampoo', precio: 8000 },
  { id: 3, nombre: 'Detergente', precio: 6500 },
  { id: 4, nombre: 'Esponja', precio: 1200 },
  { id: 5, nombre: 'Gel', precio: 3500 }
];

// Listar productos
const listarProductos = (req, res) => {
  res.json(productos);
};

// Crear producto
const crearProducto = (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = productos.length + 1;
  productos.push(nuevoProducto);
  res.status(201).json({ mensaje: 'Producto agregado', nuevoProducto });
};

// Actualizar producto
const actualizarProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  producto.nombre = req.body.nombre || producto.nombre;
  producto.precio = req.body.precio || producto.precio;

  res.json({ mensaje: 'Producto actualizado', producto });
};

// Eliminar producto
const eliminarProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  productos.splice(index, 1);
  res.json({ mensaje: 'Producto eliminado' });
};

module.exports = {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};