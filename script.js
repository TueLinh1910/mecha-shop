const products = [
    {
        id: 1,
        name: "Dian Wei",
        brand: "Motor Nuclear",
        scale: "1/100",
        price: 750000,
        inStock: true
    },
    {
        id: 2,
        name: "Lizard Polar Shark",
        brand: "In Era+",
        scale: "1/100",
        price: 1200000,
        inStock: true
    },
    {
        id: 3,
        name: "Ji-Hu",
        brand: "Motor Nuclear",
        scale: "1/100",
        price: 820000,
        inStock: false
    },
    {
        id: 4,
        name: "Fenrir",
        brand: "In Era+",
        scale: "1/72",
        price: 1450000,
        inStock: true
    },
    {
        id: 5,
        name: "Xiao Yao Di",
        brand: "Sunday Hobby",
        scale: "1/100",
        price: 960000,
        inStock: true
    },
    {
        id: 6,
        name: "Sky Defender",
        brand: "EINTA-INDUSTRIES",
        scale: "1/72",
        price: 1900000,
        inStock: false
    },
    {
        id: 7,
        name: "Azure Falcon",
        brand: "In Era+",
        scale: "1/100",
        price: 1000000,
        inStock: true
    },
    {
        id: 8,
        name: "Nether Emperor Full Armor",
        brand: "SNAA",
        scale: "1/100",
        price: 750000,
        inStock: true
    }
];

console.log(`Ten san pham thu 4: ${products[3].name}`);

console.log(`Gia san pham cuoi cung la ${products[products.length - 1].price}`);

console.log(`Tong so san pham trong kho la: ${products.length}`);

console.log(`${products[1].name} của hãng ${products[1].brand}, tỉ lệ ${products[1].scale}, giá ${products[1].price} đồng`);

products.push(
    {
        id: 9,
        name: "Haoling Baidi",
        brand: "GS-Toys",
        scale: "1/100",
        price: 1300000,
        inStock: true
    }
);

console.log(`Tổng số sản phẩm: ${products.length}`);


for (const product of products) {
    if (product.inStock) {
        console.log(`${product.id}. ${product.name} - ${product.price.toLocaleString("vi-VN")} đ - Còn hàng`);

    } else {
        console.log(`${product.id}. ${product.name} - ${product.price.toLocaleString("vi-VN")} đ - Hết hàng`);
    }
}

console.log(`Sản phẩm hãng In Era+: `);
for (const product of products) {
    if (product.brand == "In Era+") {
        console.log(`${product.name}`);
    }
}

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(`Tong gia tien toan kho: ${totalPrice.toLocaleString("vi-VN")} đ`);

let inStockCount = 0;
for (const product of products) {
    if (product.inStock) {
        inStockCount = inStockCount + 1;
    }
}
console.log(`So luong san pham con hang: ${inStockCount}`);

let maxPriceProduct = 0;
for (const product of products) {
    if (product.price > maxPriceProduct) {
        maxPriceProduct = product.price;
    }
}
for (const product of products) {
    if (product.price == maxPriceProduct) {
        console.log(`San pham dat nhat la: ${product.name} cua hang ${product.brand} voi gia la ${product.price.toLocaleString("vi-VN")}đ`);
    }
}
