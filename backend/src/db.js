const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
    return;
  }

  console.log("Connected to SQLite database");
});

// فعال کردن Foreign Key در SQLite
db.run("PRAGMA foreign_keys = ON");

db.serialize(() => {
  // ============================
  // CHATS TABLE
  // ============================

  db.run(`
    CREATE TABLE IF NOT EXISTS chats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL DEFAULT 'New Chat',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // ============================
  // MESSAGES TABLE
  // ============================

  db.run(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chat_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      type TEXT NOT NULL CHECK(type IN ('user', 'bot')),
      date TEXT NOT NULL,
      time TEXT NOT NULL,

      FOREIGN KEY (chat_id)
        REFERENCES chats(id)
        ON DELETE CASCADE
    )
  `);
});

module.exports = db;