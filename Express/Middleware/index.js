import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/profile", Token, Validation, (req, res) => {
  console.log("user logged");
});

function Token(req, res, next) {
  console.log(req.url);
  setInterval(() => {
    const TOKEN = "434";
    req.token = false;
    next();
  }, 1000);
}

function Validation(req, res, next) {
  if (req.token) {
    console.log("Token Approved");
    next();
    return;
  }
    console.log("NO token");
    res.send("NO token");
  
}

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
