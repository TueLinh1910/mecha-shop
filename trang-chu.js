const featuredList = document.getElementById("featured-list");

let html = "";

for (const product of products) {
    if (product.featured) {
        html += createProductCard(product);
    }
}

featuredList.innerHTML = html;