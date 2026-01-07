import express from 'express';
import { configureDB } from './utils/db.js';
import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes)


app.listen(3000, () => {
  configureDB()
  console.log(`Server is running on port ${PORT}`);
})
