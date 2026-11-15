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

const searchInput = document.getElementById("search-input");
const brandFilter = document.getElementById("brand-filter");
const scaleFilter = document.getElementById("scale-filter");
const sortSelect = document.getElementById("sort-select");

function applyFilters() {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedScale = scaleFilter.value;
    const sortOption = sortSelect.value;
    const resultCount = document.getElementById("search-count-result");

    const result = [];

    for (const product of products) {
        const matchKeyword = product.name.toLowerCase().includes(keyword) || product.brand.toLowerCase().includes(keyword);
        const matchBrand = selectedBrand === "all" || product.brand === selectedBrand;
        const matchScale = selectedScale === "all" || product.scale === selectedScale;

        if (matchKeyword && matchBrand && matchScale) {
            result.push(product);
        }
    }

    if (sortOption === "price-asc") {
        result.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortOption === "price-desc") {
        result.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    resultCount.textContent = `Tìm thấy ${result.length} sản phẩm`;

    if (result.length === 0) {
        productGrid.innerHTML = `<p class="empty-message">Không tìm thấy sản phẩm phù hợp.</p>`;
    } else {
        renderProducts(result);
    }
}



searchInput.addEventListener("input", applyFilters);
brandFilter.addEventListener("change", applyFilters);
scaleFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

applyFilters();