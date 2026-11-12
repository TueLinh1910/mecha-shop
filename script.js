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


