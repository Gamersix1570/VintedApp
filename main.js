// Função para buscar produtos de uma marca específica
const fetchProducts = async (brandEndpoint) => {
    try {
        const response = await fetch(`/api/${brandEndpoint}`);  // Faz uma chamada à rota do backend correspondente
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return [];
    }
};

// Função para exibir produtos na página
const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';  // Limpa os produtos anteriores

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image_url}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Preço: €${product.price}</p>
            <button onclick="window.location.href='${product.url}'">Ver produto</button>
        `;
        productContainer.appendChild(productElement);
    });
};