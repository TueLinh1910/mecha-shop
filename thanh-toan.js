const main = document.querySelector("main");
const cart = getCart();

if (cart.length === 0) {
    main.innerHTML = `
        <h2>Thanh toán</h2>
        <div class="empty-cart">
            <p>Giỏ hàng của bạn đang trống, chưa có gì để thanh toán.</p>
            <a href="san-pham.html" class="btn btn-primary">Mua sắm ngay</a>
        </div>
    `;
} else {
    renderOrderSummary();

    const checkoutForm = document.getElementById("checkout-form");

        checkoutForm.addEventListener("input", function (event) {
        const field = event.target;
        field.classList.remove("invalid");

        const errorMessage = document.getElementById(`${field.id}-error`);
        if (errorMessage !== null) {
            errorMessage.textContent = "";
        }
    });

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors();

        const fullname = document.getElementById("fullname").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const city = document.getElementById("city").value;
        const address = document.getElementById("address").value.trim();
        const payment = document.querySelector('input[name="payment"]:checked').value;

        let isValid = true;

        if (fullname === "") {
            showError("fullname", "Vui lòng nhập họ và tên.");
            isValid = false;
        }

        if (!/^0\d{9}$/.test(phone)) {
            showError("phone", "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0.");
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("email", "Email không hợp lệ.");
            isValid = false;
        }

        if (city === "") {
            showError("city", "Vui lòng chọn tỉnh / thành phố.");
            isValid = false;
        }

        if (address === "") {
            showError("address", "Vui lòng nhập địa chỉ chi tiết.");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const orderCode = `MH${Date.now()}`;
        let paymentText = "thanh toán khi nhận hàng";
        if (payment === "bank") {
            paymentText = "chuyển khoản ngân hàng";
        }

        saveCart([]);
        updateCartCount();

        main.innerHTML = `
            <div class="order-success">
                <h2>Đặt hàng thành công!</h2>
                <p>Cảm ơn <strong id="success-name"></strong> đã mua sắm tại Mecha Hangar.</p>
                <p>Mã đơn hàng của bạn: <strong>${orderCode}</strong></p>
                <p>Phương thức thanh toán: ${paymentText}.</p>
                <a href="san-pham.html" class="btn btn-primary">Tiếp tục mua sắm</a>
            </div>
        `;
        document.getElementById("success-name").textContent = fullname;
    });
}

function renderOrderSummary() {
    let html = "";
    let total = 0;

    for (const item of cart) {
        const product = findProductById(item.id);
        if (product === null) {
            continue;
        }

        const lineTotal = product.price * item.quantity;
        total += lineTotal;

        html += `
            <div class="order-item">
                <span>${product.name} × ${item.quantity}</span>
                <span>${formatPrice(lineTotal)}</span>
            </div>
        `;
    }

    document.getElementById("order-items").innerHTML = html;
    document.getElementById("order-total").textContent = formatPrice(total);
}

function showError(fieldId, message) {
    document.getElementById(fieldId).classList.add("invalid");
    document.getElementById(`${fieldId}-error`).textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    for (const errorMessage of errorMessages) {
        errorMessage.textContent = "";
    }

    const invalidFields = document.querySelectorAll(".invalid");
    for (const field of invalidFields) {
        field.classList.remove("invalid");
    }
}