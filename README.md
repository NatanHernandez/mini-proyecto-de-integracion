Mini Proyecto de Integración — API RESTful de Productos de Aseo
📋 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una API RESTful creada con Node.js y Express, que permite gestionar un inventario de productos de aseo.

El propósito es aplicar principios de ingeniería de software, buenas prácticas de programación y metodologías de desarrollo web, integrando pruebas automatizadas y un flujo de integración continua (CI) con GitHub Actions.

🚀 Funcionalidades

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos registrados.

Método	Endpoint	Descripción
GET	/api/productos	Obtiene la lista completa de productos
GET	/api/productos/:id	Obtiene un producto específico por su ID
POST	/api/productos	Agrega un nuevo producto
PUT	/api/productos/:id	Actualiza los datos de un producto existente
DELETE	/api/productos/:id	Elimina un producto

Ejemplo de un producto:

{
  "id": 1,
  "nombre": "Jabón líquido",
  "precio": 7500,
  "stock": 10
}

🛠️ Tecnologías Utilizadas

Node.js (v18 o superior)

Express.js

Postman (para pruebas manuales de endpoints)

Jest y Supertest (para pruebas automatizadas)

GitHub Actions (para integración continua)

Visual Studio Code

⚙️ Instalación y Ejecución Local

1️⃣ Clonar el repositorio:

git clone https://github.com/NatanHernandez/mini-proyecto-de-integracion.git


2️⃣ Acceder a la carpeta del proyecto:

cd mini-proyecto-de-integracion


3️⃣ Instalar dependencias:

npm install


4️⃣ Ejecutar en modo desarrollo:

npm run dev


5️⃣ Iniciar el servidor manualmente:

npm start


Servidor disponible en 👉 http://localhost:3000

🔐 Autenticación

La API está protegida con autenticación básica (Basic Auth).

Campo	Valor
Usuario	natan
Contraseña	1202

Debe enviarse el encabezado Authorization con las credenciales codificadas en Base64.

Ejemplo:

Authorization: Basic bmF0YW46MTIwMg==

📁 Estructura del Proyecto
mini-proyecto-de-integracion/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── controllers/
│   └── productosController.js
│
├── middlewares/
│   ├── autenBasica.js
│   └── validarProducto.js
│
├── models/
│   └── productosModel.js
│
├── routes/
│   └── productosRoutes.js
│
├── test/
│   └── productos.test.js
│
├── app.js
├── package.json
└── README.md

🧪 Pruebas Automatizadas

El proyecto incluye pruebas con Jest y Supertest.

Para ejecutarlas:

npm test


Ejemplo de prueba (productos.test.js):

it('Debe responder con código 200 en /api/productos', async () => {
  const res = await request(app)
    .get('/api/productos')
    .auth('natan', '1202');
  expect(res.statusCode).toBe(200);
});

🧰 Integración Continua (CI)

El archivo .github/workflows/ci.yml automatiza los pasos para ejecutar las pruebas en cada push o pull request:

name: CI - Integración continua del proyecto

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Clonar el repositorio
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas con Jest
        run: npm test

🧾 Pruebas en Postman

Todas las rutas fueron verificadas manualmente en Postman, usando autenticación básica.

✅ GET /api/productos
✅ POST /api/productos
✅ PUT /api/productos/:id
✅ DELETE /api/productos/:id

Cada endpoint devolvió los códigos de estado esperados (200, 201, 404).

🧩 Buenas Prácticas Aplicadas

Estructura modular siguiendo patrón MVC

Validación de datos en middleware

Autenticación básica segura

Código limpio y documentado

Pruebas unitarias y de integración

Pipeline de CI funcional

Control de versiones con Git y ramas limpias

📈 Estado del Proyecto

✅ CRUD completo
✅ Pruebas con Postman
✅ Pruebas automatizadas
✅ CI/CD configurado
✅ Documentación README completa

📊 Porcentaje estimado de cumplimiento: 100%

👨‍💻 Autor

Natan Hernández
Proyecto académico — Desarrollo de Servicios Web / Ingeniería de Software
📅 Año: 2025
