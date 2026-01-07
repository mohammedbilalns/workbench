import { db } from "../utils/db.js"

export const registerUser = (req, res) =>{
  const {name, email } = req.body 

  const stmt = db.prepare(
    "INSERT INTO users (name, email) VALUES (?, ?)"
  )

  try {
    const result  = stmt.run(name, email)
    res.status(201).json({id: result.lastInsertRowid})

  } catch (err) {
    res.status(400).json({error: err.message})

  }

}

export const getUsers = (_req, res) => {
  const stmt = db.prepare("SELECT * FROM users")
  const users = stmt.all()
  res.json(users)

}
