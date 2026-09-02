const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// ============================
// GET ALL MESSAGES
// GET /api/messages
// ============================

app.get("/api/messages", (req, res) => {
  const sql = `
    SELECT id, content, type, date, time
    FROM messages
    ORDER BY id ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(rows);
  });
});

// ============================
// GET ONE MESSAGE
// GET /api/messages/:id
// ============================

app.get("/api/messages/:id", (req, res) => {
  const { id } = req.params;

  db.get(
    `
    SELECT id, content, type, date, time
    FROM messages
    WHERE id = ?
    `,
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (!row) {
        return res.status(404).json({
          message: "Message not found",
        });
      }

      res.json(row);
    },
  );
});

// ============================
// CREATE MESSAGE
// POST /api/messages
// ============================

app.post("/api/messages", (req, res) => {
  const { content, type, date, time } = req.body;

  if (!content || !type || !date || !time) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (type !== "user" && type !== "bot") {
    return res.status(400).json({
      message: "type must be user or bot",
    });
  }

  const sql = `
    INSERT INTO messages (content, type, date, time)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [content, type, date, time], function (err) {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(201).json({
      id: this.lastID,
      content,
      type,
      date,
      time,
    });
  });
});

// ============================
// UPDATE MESSAGE
// PUT /api/messages/:id
// ============================

app.put("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const { content, type, date, time } = req.body;

  if (!content || !type || !date || !time) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (type !== "user" && type !== "bot") {
    return res.status(400).json({
      message: "type must be user or bot",
    });
  }

  const sql = `
    UPDATE messages
    SET content = ?,
        type = ?,
        date = ?,
        time = ?
    WHERE id = ?
  `;

  db.run(sql, [content, type, date, time, id], function (err) {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      id: Number(id),
      content,
      type,
      date,
      time,
    });
  });
});

// ============================
// DELETE MESSAGE
// DELETE /api/messages/:id
// ============================

app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM messages WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      message: "Message deleted successfully",
    });
  });
});

// ============================
// START SERVER
// ============================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
