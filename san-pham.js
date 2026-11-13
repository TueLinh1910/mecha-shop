const productGrid = document.getElementById("product-grid");

let html = "";

for (const product of products) {
    let stockLabel = "";

    if (!product.inStock) {
        stockLabel = `<p class="out-of-stock">Hết hàng</p>`;
    }

    html += `
        <div class="product-card">
            <img src="${product.image}" alt="Model kit ${product.name}">
            <h3><a href="chi-tiet.html?id=${product.id}"> [${product.brand}] ${product.name}</a></h3>
            <p>Tỉ lệ: ${product.scale}</p>
            <p class="price">${product.price.toLocaleString("vi-VN")}đ</p>
            ${stockLabel}
        </div>
    `;   
}

productGrid.innerHTML = html;
