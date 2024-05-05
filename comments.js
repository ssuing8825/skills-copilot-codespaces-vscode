// Create web server for comments

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Define port
const port = 3002;

// Use cors middleware
app.use(cors());

// Use body parser middleware
app.use(bodyParser.json());

// Create comments array
const comments = [];

// Define endpoint to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Define endpoint to post comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Comments server started on port ${port}`);
});
