const axios = require('axios');

// Função para buscar produtos da Vinted por marca
const fetchProductsByBrand = async (brandName) => {
    try {
        const response = await axios.get(`https://www.vinted.com/api/v2/products?search_text=${brandName}`);
        return response.data.items;  // Ajuste este caminho de acordo com a estrutura de resposta da API
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
    }
};

module.exports = fetchProductsByBrand;
