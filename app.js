const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock DB
const items = [
  {
    id: '7fa2e3a4-2d6f-4c6e-90e0-bfda8e3432d4',
    title: 'Test Item',
    description: 'This is some data linked to this UUID.'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Second Item',
    description: 'This is another test item.'
  }
];

// Endpoint to fetch item by ID
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});