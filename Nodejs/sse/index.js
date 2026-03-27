import express from 'express';

const app = express();


app.get("/stream", (req,res) =>{
  res.set("Content-Type", "text/event-stream");

  res.write("data: Hello World\n\n");
  res.write("data: Goodbye World\n\n");
  res.write("data: Hello World\n\n");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
