// Create web server and listen on port 3000
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Create an array of comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send();
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

