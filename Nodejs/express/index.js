import express from "express";

const app = express();

app.get("/", (req, res) => {
  const query = req.query;
  const name = query.name;
  const age = query.age;
  console.log(age);
  res.send(name + age);
});

app.listen(3000, () => {
  console.log("running");
});
