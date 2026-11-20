const cartList = document.getElementById("cart-list");
const cartSummary = document.getElementById("cart-summary");
const summaryCount = document.getElementById("summary-count");
const summaryTotal = document.getElementById("summary-total");

function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <p>Giỏ hàng của bạn đang trống.</p>
                <a href="san-pham.html" class="btn btn-primary">Mua sắm ngay</a>
            </div>
        `;
        cartSummary.classList.add("hidden");
        return;
    }

    cartSummary.classList.remove("hidden");

    let html = "";
    let totalPrice = 0;
    let totalCount = 0;

    for (const item of cart) {
        const product = findProductById(item.id);
        if (product === null) {
            continue;
        }

        const lineTotal = product.price * item.quantity;
        totalPrice += lineTotal;
        totalCount += item.quantity;

        html += `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3><a href="chi-tiet.html?id=${product.id}">${product.name}</a></h3>
                    <p class="brand">${product.brand}</p>
                    <p class="price">${formatPrice(product.price)}</p>
                </div>
                <div class="quantity-control">
                    <button class="qty-btn" data-action="decrease" data-id="${product.id}">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-action="increase" data-id="${product.id}">+</button>
                </div>
                <p class="line-total">${formatPrice(lineTotal)}</p>
                <button class="remove-btn" data-action="remove" data-id="${product.id}">Xoá</button>
            </div>
        `;
    }

    cartList.innerHTML = html;
    summaryCount.textContent = totalCount;
    summaryTotal.textContent = formatPrice(totalPrice);
}

cartList.addEventListener("click", function (event) {
    const action = event.target.dataset.action;
    const productId = Number(event.target.dataset.id);

    if (action === undefined) {
        return;
    }

    if (action === "increase") {
        changeQuantity(productId, 1);
    } else if (action === "decrease") {
        changeQuantity(productId, -1);
    } else if (action === "remove") {
        const ok = confirm("Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?");
        if (!ok) {
            return;
        }
        removeFromCart(productId);
    }

    renderCart();
});

renderCart();