const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./messages.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to SQLite");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('user', 'bot')),
    date TEXT NOT NULL,
    time TEXT NOT NULL
  )
`);

module.exports = db;
