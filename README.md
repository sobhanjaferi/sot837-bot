<div align="center">

# 🤖 SOT837 Bot

### A Modern AI-Powered Chat Application

A full-stack chatbot application built with modern web technologies.

[🌐 Live Demo](https://sot837-bot.vercel.app) · [🐛 Report Bug](https://github.com/sobhanjaferi/sot837-bot/issues) · [✨ Request Feature](https://github.com/sobhanjaferi/sot837-bot/issues)

</div>

---

## 📖 About The Project

**SOT837 Bot** is a modern AI-powered chat application that allows users to interact with an AI through a clean and responsive interface.

The project follows a separated **frontend/backend architecture**. The frontend is built with Next.js and React, while the backend provides REST APIs using Express and SQLite.

The application also supports managing chat messages and conversations with a modern state management approach.

---

## ✨ Features

* 🤖 AI-powered conversations
* 💬 Real-time chat experience
* 🗂️ Multiple chat conversations
* 💾 Persistent message storage
* 🔄 REST API integration
* ⚡ Client-side state management with Zustand
* 📱 Responsive user interface
* 🎨 Modern and clean UI
* 🔍 Chat and message management
* 🧩 Separate frontend and backend architecture

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Zustand
* Lucide React
* UUID

### Backend

* Node.js
* Express.js
* SQLite
* CORS

### Tools

* Git
* GitHub
* Vercel
* Nodemon
* ESLint
* Prettier

---

## 📂 Project Structure

```text
sot837-bot/
│
├── frontend/                 # Next.js Frontend
│   ├── src/
│   ├── public/
│   ├── types/
│   ├── package.json
│   └── ...
│
├── backend/                  # Express Backend
│   ├── src/
│   ├── database.sqlite
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/sobhanjaferi/sot837-bot.git
```

```bash
cd sot837-bot
```

---

# 💻 Frontend Setup

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
.env.local
```

Add your required environment variables:

```env
OPENROUTER_API_KEY=your_api_key
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# ⚙️ Backend Setup

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The backend will start using Express.

---

## 🔌 API

The backend is responsible for handling application data and message management.

Example structure:

```text
GET    /api/messages
POST   /api/messages
DELETE /api/messages/:id
```

> API endpoints may evolve as the project grows.

---

## 🧠 State Management

This project uses **Zustand** for client-side state management.

Zustand helps manage:

* Messages
* Chat state
* UI state
* API interactions

---

## 🌐 Live Demo

🚀 **Try the application:**

https://sot837-bot.vercel.app

---

## 🎯 Future Improvements

* [ ] User authentication
* [ ] Better conversation management
* [ ] Chat history
* [ ] Delete conversations
* [ ] Edit messages
* [ ] Streaming AI responses
* [ ] PostgreSQL migration
* [ ] Docker support
* [ ] Improved backend architecture
* [ ] Unit and integration tests
* [ ] Production-ready API deployment

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to the branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Sobhan Jafari**

Frontend Developer

* GitHub: [@sobhanjaferi](https://github.com/sobhanjaferi)
* Portfolio: https://portfolio-pearl-eta-79.vercel.app/

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Made with ❤️ by Sobhan Jafari

</div>
