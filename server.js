const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Signup Route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || password.length < 6) {
    return res.status(400).json({ message: 'Invalid username or password (min 6 chars)' });
  }

  const users = JSON.parse(fs.readFileSync('users.json'));

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  users.push({ username, password });
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  res.json({ message: 'Signup successful' });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const users = JSON.parse(fs.readFileSync('users.json'));
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
