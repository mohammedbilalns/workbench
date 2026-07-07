import express from 'express';
import multer from "multer"
import cors from "cors"

const app = express();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null , "./uploads")
  },

  filename(req, file, cb){
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({storage})

app.use(cors({
  origin:"http://localhost:5174"
}))
app.post("/upload", upload.single("image"), (req, res) => {
  console.log("Hit")
  console.log(req.file)

  res.json({
    success : true, 
    file : req.file.filename
  })
})


const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

server.on("error",  (err) => {
  console.error("Error: ", err)
})
