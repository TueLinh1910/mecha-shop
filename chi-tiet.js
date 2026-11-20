const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = findProductById(productId);

if (product === null) {
    document.querySelector("main").innerHTML = `
    <h2>Không tìm thấy sản phẩm</h2>
    <p>Sản phẩm bạn tìm không tồn tại hoặc đã ngừng kinh doanh. </p>
    <a href="san-pham.html" class="back-link">← Quay lại danh sách</a>
    `;
} else {
    document.title = `${product.name} - Mecha Hangar`;

    const mainImage = document.getElementById("main-image");
    mainImage.src = product.image;
    mainImage.alt = `Model kit ${product.brand} ${product.name}`;

    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = formatPrice(product.price);
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("spec-scale").textContent = product.scale;
    document.getElementById("spec-brand").textContent = product.brand;

    const addToCartButton = document.getElementById("add-to-cart");
    const buyNowButton = document.getElementById("buy-now");
    const quantityInput = document.getElementById("quantity");

    const statusCell = document.getElementById("spec-status");
    if (product.inStock) {
        statusCell.textContent = "Còn hàng";
    } else {
        statusCell.textContent = "Hết hàng";
        statusCell.classList.add("out-of-stock");
        addToCartButton.disabled = true;
        buyNowButton.disabled = true;
    }

    function getValidQuantity() {
        const quantity = Number(quantityInput.value);

        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
            alert("Số lượng không hợp lệ. Vui lòng nhập số nguyên từ 1 đến 10.");
            return null;
        }

        return quantity;
    }

    addToCartButton.addEventListener("click", function () {
        const quantity = getValidQuantity();
        if (quantity === null) {
            return;
        }

        addToCart(product.id, quantity);
        alert(`Đã thêm ${quantity} hộp ${product.name} vào giỏ hàng!`);
    });

    buyNowButton.addEventListener("click", function () {
        const quantity = getValidQuantity();
        if (quantity === null) {
            return;
        }

        addToCart(product.id, quantity);
        window.location.href = "gio-hang.html";
    });

    const thumbnails = document.querySelectorAll(".thumbnails img");

    for (const thumbnail of thumbnails) {
        thumbnail.addEventListener("click", function () {
            mainImage.src = thumbnail.src;

            for (const other of thumbnails) {
                other.classList.remove("active");
            }

            thumbnail.classList.add("active");
        });
    }
}
