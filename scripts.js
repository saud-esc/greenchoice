const products = [
    {
        name: "Eco-friendly Dish Soap",
        category: "cleaning",
        packaging: "recyclable",
        description: "Plant-based ingredients and recyclable packaging."
    },
    {
        name: "Organic Shampoo",
        category: "personal-care",
        packaging: "biodegradable",
        description: "Made with organic oils and biodegradable packaging."
    },
    {
        name: "Sustainable Cotton T-shirt",
        category: "fashion",
        packaging: "recyclable",
        description: "100% organic cotton with recyclable packaging."
    }
];

const categoryFilter = document.getElementById('category');
const packagingFilter = document.getElementById('packaging');
const productList = document.getElementById('product-list');

function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Packaging:</strong> ${product.packaging}</p>
        `;
        productList.appendChild(productItem);
    });
}

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPackaging = packagingFilter.value;

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const packagingMatch = selectedPackaging === 'all' || product.packaging === selectedPackaging;
        return categoryMatch && packagingMatch;
    });

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener('change', filterProducts);
packagingFilter.addEventListener('change', filterProducts);

// Initial display of all products
displayProducts(products);
