const productGrid = document.getElementById("product-grid");

function renderProducts(list) {
    let html = "";

    for (const product of list) {
        let stockLabel = "";
        if (!product.inStock) {
            stockLabel = `<p class="out-of-stock">Hết hàng</p>`;
        }

        html += `
            <div class="product-card">
                <img src="${product.image}" alt="Model kit ${product.name}">
                <h3><a href="chi-tiet.html?id=${product.id}">[${product.brand}] ${product.name}</a></h3>
                <p>Tỉ lệ: ${product.scale}</p>
                <p class="price">${formatPrice(product.price)}</p>
                ${stockLabel}
            </div>
        `;
    }

    productGrid.innerHTML = html;
}

renderProducts(products);
