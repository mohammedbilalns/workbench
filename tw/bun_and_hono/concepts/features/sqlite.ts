import { Database } from "bun:sqlite";

async function sqliteDemo() {
  const db = new Database("bundb.sqlite");

  
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL, 
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("Table users created successfully");

  // Insert sample data (uncomment if needed)
  // db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`).run("Bilal", "bilalnsmuhammed@gmail.com");

  // Read all users
  const extractedUsers = db.query(`SELECT * FROM users`).all();
  console.log("All users:", extractedUsers);

  // Update user (make sure email exists in DB)
  db.run(`UPDATE users SET name = ? WHERE email = ?`, ["Bilaldfs", "bilalnsmuhammed@gmail.com"]);

  // Fetch updated user info
  const getUpdatedUserInfo = db.query(`SELECT * FROM users WHERE email = ?`).get("bilalnsmuhammed@gmail.com");
  console.log("Updated user:", getUpdatedUserInfo);

  // Close connection when done
  db.close();


}

sqliteDemo();




