const express = require('express');
const cors = require('cors');
const fetchProductsByBrand = require('./api');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para lidar com CORS
app.use(cors());

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota API para cada marca, que busca produtos com base no nome da marca
app.get('/api/:brand', async (req, res) => {
    const brand = req.params.brand;
    const products = await fetchProductsByBrand(brand);
    res.json(products);
});

// Iniciar o servidor na porta configurada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
