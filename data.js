const products = [
    {
        id: 1,
        name: "Dian Wei",
        brand: "Motor Nuclear",
        scale: "1/100",
        price: 750000,
        inStock: true,
        image: "images/dian-wei-1.webp",
        gallery: [
            "images/dian-wei-2.webp",
            "images/dian-wei-3.webp",
            "images/dian-wei-4.webp"
        ],
        description: "Mô hình lắp ráp Motor Nuclear MNP-XH16 Điển Vi (Dian Wei) mang đến tạo hình “Cổ Chi Ác Lai” cực kỳ ma mị và cuồng bạo. Điểm nhấn của cỗ máy nằm ở bộ khung xương kim loại siêu đầm chắc, kết hợp cùng hệ thống áo choàng phản lực đồ sộ phía sau có thể bung mở thành đôi cánh sắc lẹm.",
        featured: true
    },
    {
        id: 2,
        name: "Lizard Polar Shark",
        brand: "In Era+",
        scale: "1/100",
        price: 1200000,
        inStock: true,
        image: "images/lizard-1.webp",
        gallery: [
            "images/lizard-2.webp",
            "images/lizard-3.webp",
            "images/lizard-4.webp"
        ],
        description: "Mô hình lắp ráp IN ERA+ LIZARD 1/100 (Bản Polar Shark) thuộc dòng RMD (Real Minutia Designs) nổi tiếng với hệ khung xương nhựa toàn diện cực kỳ sắc nét và vững chãi. Phiên bản Polar Shark gây ấn tượng mạnh với phối màu Trắng-Xanh lạnh lùng, bề mặt giáp bám màu lý tưởng cho anh em thỏa sức tỉa tót bằng màu acrylic. Đặc biệt, cỗ máy sở hữu dàn vũ khí hạng nặng áp đảo với bộ đôi pháo Gatling khổng lồ và Đại rìu năng lượng (Thermal Axe) đính kèm các dải hiệu ứng màu xanh lam trong suốt tuyệt đẹp. Tặng kèm Decal nước và Base trưng bày chính hãng.",
        featured: true
    },
    {
        id: 3,
        name: "Ji-Hu",
        brand: "Motor Nuclear",
        scale: "1/100",
        price: 820000,
        inStock: false,
        image: "images/jihu-1.webp",
        gallery: [
            "images/jihu-2.webp",
            "images/jihu-3.webp",
            "images/jihu-4.webp"
        ],
        description: "Mô hình lắp ráp Motor Nuclear MNP-CR02 Type 65 JiHu Mark II (Assault Type) mang đậm phong cách quân sự viễn tưởng. Sản phẩm gây ấn tượng mạnh với bộ khung xương kim loại đúc sẵn siêu đầm tay (trọng lượng ~2.5kg), kết hợp cùng bề mặt giáp nhám mờ cực kỳ lý tưởng để anh em thỏa sức custom, đi cọ weathering và màu acrylic theo phong cách chiến trường thực dụng."
    },
    {
        id: 4,
        name: "Fenrir",
        brand: "In Era+",
        scale: "1/72",
        price: 1450000,
        inStock: true,
        image: "images/fenrir-1.webp",
        gallery: [
            "images/fenrir-2.webp",
            "images/fenrir-3.webp",
            "images/fenrir-4.webp"
        ],
        description: "Thuộc dòng sản phẩm RMD (Real Minutia Design) danh tiếng, Fenrir không chỉ là một mô hình lắp ráp đơn thuần, mà là một kiệt tác cơ khí lấy cảm hứng từ thần thoại Sói Fenrir. Với chiều cao khủng khiếp lên tới 27cm-30cm (tương đương Perfect Grade của Bandai), bộ kit này mang lại cảm giác đồ sộ, hầm hố và chi tiết đến kinh ngạc.",
        featured: true
    },
    {
        id: 5,
        name: "Xiao Yao Di",
        brand: "Sunday Hobby",
        scale: "1/100",
        price: 960000,
        inStock: true,
        image: "images/xiao-yao-di-1.webp",
        gallery: [
            "images/xiao-yao-di-2.webp",
            "images/xiao-yao-di-3.webp",
            "images/xiao-yao-di-4.webp"
        ],
        description: "Tiêu Dao Tử (Xiaoyaozi) là một mẫu mô hình mecha đặc biệt đến từ Ming Jiang Legend - Sunday Hobby, kết hợp yếu tố văn hóa tu tiên Trung Hoa với thiết kế mecha hiện đại. Với chiều cao khoảng 22 cm (8.66 in) khi hoàn thiện, Xiaoyaozi mang phong cách hình tượng lang thang (“wanderer / ronin”) nhưng được khoác lên mình lớp áo giáp tinh tế: phối màu trắng-vàng nổi bật, họa tiết mây, motif Taoist, và các chi tiết trang trí cầu kỳ như đĩa “mũ”, tay nắm, cùng quả bầu cơ khí “Taiyi Mechanism Gourd”. Đây là sản phẩm phù hợp cho người chơi model có kinh nghiệm, mong muốn một piece trưng bày đẹp và chi tiết."
    },
    {
        id: 6,
        name: "Sky Defender",
        brand: "EINTA-INDUSTRIES",
        scale: "1/72",
        price: 1900000,
        inStock: false,
        image: "images/sky-defender-1.webp",
        gallery: [
            "images/sky-defender-2.webp",
            "images/sky-defender-3.webp",
            "images/sky-defender-4.webp"
        ],
        description: "Đánh dấu một cột mốc mới trong giới đam mê mô hình, 1/72 Sky Defender đến từ EINTA-INDUSTRIES là một siêu phẩm Original Mecha (Thiết kế nguyên bản có bản quyền chính thức) đang làm mưa làm gió trên toàn cầu. Phá vỡ định kiến về các dòng kit nội địa, EINTA-INDUSTRIES đã mang đến một thiết kế độc quyền, được đầu tư R&D cực kỳ nghiêm túc, tạo nên một chuẩn mực mới về độ hoàn thiện cho bất kỳ bộ sưu tập mecha cao cấp nào."
    },
    {
        id: 7,
        name: "Azure Falcon",
        brand: "In Era+",
        scale: "1/100",
        price: 1000000,
        inStock: true,
        image: "images/azure-falcon-1.webp",
        gallery: [
            "images/azure-falcon-2.webp",
            "images/azure-falcon-3.webp",
            "images/azure-falcon-4.webp"
        ],
        description: "In Era+ RMD Azure Falcon là một trong những mẫu mô hình lắp ráp (model kit) đáng mong chờ nhất năm 2026 đến từ các nhà sản xuất mecha đình đám của Trung Quốc. Thừa hưởng độ chi tiết sắc sảo và phong cách thiết kế hiện đại đặc trưng của dòng RMD, Azure Falcon mang đến trải nghiệm lắp ráp đỉnh cao với khả năng chuyển đổi hình thái linh hoạt mà không làm mất đi độ cứng cáp của form dáng."
    },
    {
        id: 8,
        name: "Nether Emperor Full Armor",
        brand: "SNAA",
        scale: "1/100",
        price: 750000,
        inStock: true,
        image: "images/nether-emperor-1.webp",
        gallery: [
            "images/nether-emperor-2.webp",
            "images/nether-emperor-3.webp",
            "images/nether-emperor-4.webp"
        ],
        description: "Sự trở lại đầy uy lực từ hãng SNAA với siêu phẩm YR-05 Nether Emperor FA (Minh Hoàng - Phiên bản trang bị cánh chim ưng Falcon). Trái ngược hoàn toàn với các thiết kế thánh thiện trước đây, Nether Emperor mang đến một sắc thái hắc ám, gai góc và đầy quyền lực.",
        featured: true
    },
    {
        id: 9,
        name: "Haoling Baidi",
        brand: "GS-Toys",
        scale: "1/100",
        price: 1300000,
        inStock: true,
        image: "images/haoling-1.webp",
        gallery: [
            "images/haoling-2.webp",
            "images/haoling-3.webp",
            "images/haoling-4.webp"
        ],
        description: "Siêu phẩm mecha mang phong cách thần thoại phương Đông từ hãng Going Shine Toys (GS-Toys) - Hạo Linh Bạch Đế (Haoling Baidi) EMP-02. Tác phẩm thuộc series Ngự Ý Đường (Yuyitang), mang đến sự kết hợp hoàn hảo giữa thiết kế cơ khí sắc sảo và hình tượng Thần Điểu Phượng Hoàng."
    },
    {
        id: 10,
        name: "Mechanical God COLADA",
        brand: "Howling Star x Earnestcore Craft",
        scale: "1/100",
        price: 1500000,
        inStock: true,
        image: "images/colada-1.webp",
        gallery: [
            "images/colada-2.webp",
            "images/colada-3.webp",
            "images/colada-4.webp"
        ],
        description: "Sản phẩm Howling Star × Earnestcore Craft – Mecha God Colada Armor là bộ kit mô hình plastic cao cấp hơn 900 chi tiết, có 11 vùng LED, chiều dài trang bị đầy đủ lên đến ~50 cm, cao ~35 cm khi kèm đế. Phiên bản đặt trước (pre-order) dự kiến phát hành vào Tháng 6 năm 2026. Thích hợp cho người chơi có kinh nghiệm, mong muốn sưu tầm mẫu mecha hoành tráng và chi tiết."
    }
];

function formatPrice(price) {
    return `${price.toLocaleString("vi-VN")}đ`;
}

function findProductById(id) {
    for (const product of products) {
        if (product.id === id) {
            return product;
        }
    }
    return null;
}

function createProductCard(product) {
    let stockLabel = "";
    if (!product.inStock) {
        stockLabel = `<p class="out-of-stock">Hết hàng</p>`;
    }

    return `
        <div class="product-card">
            <img src="${product.image}" alt="Model kit ${product.name}">
            <h3><a href="chi-tiet.html?id=${product.id}">[${product.brand}] ${product.name}</a></h3>
            <p>Tỉ lệ: ${product.scale}</p>
            <p class="price">${formatPrice(product.price)}</p>
            ${stockLabel}
        </div>
    `;
}