# 📌 ToDo App Fullstack

Este es el proyecto final del curso de Desarrollo Fullstack.  
Se trata de una aplicación **ToDo List** que permite a los usuarios:

- Registrarse con un nickname, email y contraseña.
- Iniciar sesión con autenticación segura.
- Crear, leer, actualizar y eliminar tareas propias.
- Cambiar su avatar.
- Compartir el enlace de la aplicación.

La aplicación está dividida en dos partes:

- **Backend**: API REST con Node.js, Express y MongoDB.
- **Frontend**: Interfaz de usuario en React con Vite y TailwindCSS.

---

## 📁 Estructura del proyecto

```
final-fullstack-nicolas-galarza/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── content/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/
    │   ├── data/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js
```

---

## 🧠 Tecnologías utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- nodemon

### Frontend
- React
- React Router DOM
- TailwindCSS
- Vite
- Context API

---

## 🚀 Instalación y ejecución

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor en:
```
http://localhost:4000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación en:
```
http://localhost:5173
```

---

## 🔐 Seguridad

- Autenticación con JWT
- Rutas protegidas
- Contraseñas encriptadas
- Cada usuario accede solo a sus tareas

---

## 🧪 Pruebas con Postman

- Registro
- Login (token)
- CRUD de tareas con autorización

---

## 🎥 Video demostración

https://www.youtube.com/watch?v=6X0sxiD9jRg

---

## 👨‍💻 Autor

**Nicolás Galarza**  
Proyecto Final Fullstack – BIOS
