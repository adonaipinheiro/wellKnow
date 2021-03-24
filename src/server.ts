import express from 'express';

const app = express();

const port = 3333;

app.get('/.well-know/assets', (req, res) => {
  return res.json([{ message: 'Hello World!' }]);
});

app.get('/.well-know/apple', (req, res) => {
  return res.json([{ message: 'Hello World!' }]);
});

app.listen(port, () => {
  console.log(`🚀 Server started on port: ${port}`);
});