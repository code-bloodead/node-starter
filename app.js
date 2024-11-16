const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Set the static folder for CSS and other static assets
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
