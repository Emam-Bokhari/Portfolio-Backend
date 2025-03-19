# Portfolio Backend

Welcome to the backend Portfolio, built with Node.js, Express, and MongoDB, handling CRUD operations for blogs, projects, skills, and contact messages.

## 🚀 Features

| Feature  | Description                                    |
| -------- | ---------------------------------------------- |
| Blogs    | Create, Read, Update, Delete (CRUD) blog posts |
| Skills   | Create, Read, Update, Delete (CRUD)            |
| Projects | Manage portfolio projects dynamically          |
| Contacts | Store and manage contact form submissions      |

## 🛠️ Tech Stack

| Category   | Technology             |
| ---------- | ---------------------- |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB (Mongoose ODM) |
| Deployment | Vercel                 |

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Emam-Bokhari/Portfolio-Backend.git
cd Portfolio-Backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add:

```bash
PORT=5000
NODE_ENV=development
DATABASE_URL='Your database uri link'
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET='Your jwt access secret'
```

### 4️⃣ Run the Server

```bash
npm run start:dev
```

Server will start at `http://localhost:5000`.

## 🔥 API Endpoints

### 📝 Blogs

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/blogs`     | Get all blogs   |
| POST   | `/api/blogs`     | Create a blog   |
| GET    | `/api/blogs/:id` | Get single blog |
| PATCH  | `/api/blogs/:id` | Update blog     |
| DELETE | `/api/blogs/:id` | Delete blog     |

### 💡 Skills

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | `/api/skills`     | Get all skills   |
| POST   | `/api/skills`     | Create a skill   |
| GET    | `/api/skills/:id` | Get single skill |
| PATCH  | `/api/skills/:id` | Update skill     |
| DELETE | `/api/skills/:id` | Delete skill     |

### 📂 Projects

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/projects`     | Get all projects   |
| POST   | `/api/projects`     | Create a project   |
| GET    | `/api/projects/:id` | Get single project |
| PATCH  | `/api/projects/:id` | Update project     |
| DELETE | `/api/projects/:id` | Delete project     |

### 📧 Contacts

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/contacts`     | Get all messages |
| POST   | `/api/contacts`     | Send a message   |
| DELETE | `/api/contacts/:id` | Delete message   |

## 🎯 Author

Developed with ❤️ by Moshfiqur Rahman (Emam Bokhari).

🚀 Happy Coding! 🎯
