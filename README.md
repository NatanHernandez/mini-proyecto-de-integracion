# 🧴 Mini Proyecto de Integración — API RESTful de Productos de Aseo

---

## 📋 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **API RESTful** con **Node.js** y **Express** para gestionar un inventario de **productos de aseo**.  
El objetivo es aplicar los principios de **ingeniería de software**, **metodologías de desarrollo web**, **pruebas automatizadas**, y **buenas prácticas de integración continua**.

---

## 🚀 Funcionalidades

La API permite realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre los productos.

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **GET** | `/api/productos` | Obtiene la lista completa de productos |
| **GET** | `/api/productos/:id` | Obtiene un producto específico |
| **POST** | `/api/productos` | Crea un nuevo producto |
| **PUT** | `/api/productos/:id` | Actualiza un producto existente |
| **DELETE** | `/api/productos/:id` | Elimina un producto del sistema |

Ejemplo de producto:
```json
{
  "id": 1,
  "nombre": "Jabón",
  "precio": 3700,
  "stock": 10
}
