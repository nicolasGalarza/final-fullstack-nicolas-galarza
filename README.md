# 📌 ToDo App Fullstack

Proyecto final del curso de **Desarrollo Fullstack – BIOS**.  
Aplicación **ToDo List** con autenticación que permite a los usuarios gestionar sus tareas de forma segura.

---

## ✨ Funcionalidades

- Registro de usuarios (nickname, email y contraseña)
- Login con autenticación JWT
- CRUD completo de tareas (crear, leer, editar y eliminar)
- Cambio de avatar
- Acceso protegido: cada usuario ve solo sus tareas

---

## 🏗️ Arquitectura

El proyecto está dividido en dos partes independientes:

- **Backend**: API REST desarrollada con Node.js, Express y MongoDB  
- **Frontend**: Aplicación React creada con Vite y estilada con TailwindCSS

---

## 📁 Estructura del proyecto

```
final-fullstack-nicolas-galarza/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .gitignore
│   ├── .env.example
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── content/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/
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
- MongoDB + Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- nodemon

### Frontend
- React
- Vite
- React Router DOM
- TailwindCSS
- Context API

---

## ⚙️ Instalación y ejecución

### 🔧 Requisitos
- Node.js v18 o superior
- MongoDB local

---

### Backend

```bash
cd backend
npm install
```

Crear un archivo `.env` basado en `.env.example`:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/todoDB
JWT_SECRET=your_secret_here
```

Ejecutar servidor:

```bash
npm run dev
```

Servidor disponible en:
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

Aplicación disponible en:
```
http://localhost:5173
```

---

## 🔐 Seguridad

- Autenticación basada en JWT
- Rutas protegidas
- Contraseñas encriptadas con bcrypt
- Acceso restringido a recursos propios

---

## 🧪 Pruebas

La API fue probada con **Postman**, validando:
- Registro de usuarios
- Login y generación de token
- CRUD de tareas con autorización

---

## 🎥 Video demostración

👉 https://www.youtube.com/watch?v=6X0sxiD9jRg

---

## 👨‍💻 Autor

**Nicolás Galarza**  
Proyecto Final – Desarrollo Fullstack  
Academia BIOS
