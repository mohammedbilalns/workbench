import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
const port = 3000 

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Webhook Receiver! Use /webhook-example for POST requests.');
});

app.post('/webhook-example', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('Webhook received successfully!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
