const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/productos', async (req, res) => {
  try {
    const respuesta = await fetch('https://fakestoreapi.com/products?limit=6');
    const productos = await respuesta.json();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor API en http://localhost:${port}`);
});
