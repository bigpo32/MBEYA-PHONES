const express = require('express');
const app = express();

// Render automatically sets PORT, so we use process.env.PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Root route → serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Example API route → handle phone orders
app.post('/buy', (req, res) => {
  const { phone } = req.body;
  res.json({ message: `Order received for ${phone}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
