Mini Proyecto de Integracion o API RESTful de Productos de Aseo Natan Hernandez

📋 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API RESTful creada con Node.js y Express, que permite gestionar un inventario de productos de aseo.
El objetivo es aplicar los principios de la ingeniería de software, buenas prácticas de programación y las metodologías de desarrollo de servicios web.

🚀 Funcionalidades

El sistema permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos registrados:

Método	Endpoint	Descripción
GET	/api/productos	Obtiene la lista completa de productos
GET	/api/productos/:id	Obtiene un producto específico por su ID
POST	/api/productos	Agrega un nuevo producto al inventario
PUT	/api/productos/:id	Actualiza los datos de un producto existente
DELETE	/api/productos/:id	Elimina un producto del inventario

Ejemplo de un producto:

{
  "id": 1,
  "nombre": "Jabón líquido",
  "precio": 7500,
  "cantidad": 10
}

🛠️ Tecnologías Utilizadas

Node.js – Entorno de ejecución de JavaScript

Express.js – Framework para construir APIs

Postman – Pruebas de los endpoints

Git & GitHub – Control de versiones y repositorio remoto

VS Code – Editor de desarrollo

⚙️ Instalación y Ejecución Local

Clona este repositorio:

git clone https://github.com/tuusuario/mini-proyecto-de-integracion.git


Entra a la carpeta del proyecto:

cd mini-proyecto-de-integracion


Instala las dependencias:

npm install express


Ejecuta el servidor:

node index.js


Abre Postman y prueba los endpoints en:

http://localhost:3000/api/productos

🧪 Pruebas en Postman

Se realizaron pruebas con los métodos GET, POST, PUT y DELETE.
Cada endpoint fue validado correctamente, garantizando el funcionamiento completo del CRUD.

🧩 Estructura del Proyecto
mini-proyecto-de-integracion/
│
├── index.js
├── package.json
├── node_modules/
└── README.md

🧱 Arquitectura

Se utilizó el patrón MVC (Modelo - Vista - Controlador) simplificado:

Modelo: Datos de los productos (almacenados en un arreglo o archivo JSON).

Controlador: Lógica para manejar las rutas y operaciones CRUD.

Rutas: Definidas con Express usando métodos HTTP.

🧠 Buenas Prácticas Implementadas

Código modular y ordenado

Uso de status codes HTTP correctos (200, 201, 404, 500)

Validación de datos en el servidor

Uso de try-catch para manejo de errores

Documentación del API con comentarios

Control de versiones con Git y ramas limpias

📈 Estado del Proyecto

✅ CRUD completo funcionando
✅ Pruebas en Postman exitosas
✅ Repositorio en GitHub actualizado
✅ Documentación README terminada

📊 Porcentaje estimado de cumplimiento: 95%

👨‍💻 Autor

Natan Hernández
Proyecto académico para la asignatura de Desarrollo de Servicios Web
📅 Año: 2025
