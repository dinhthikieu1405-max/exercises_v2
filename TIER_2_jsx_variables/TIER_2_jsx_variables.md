1.Thông tin cá nhân
function MyInfo() {
    const ten = "Kiều";
    const tuoi = 20;
    const queQuan = "Hà Nội";
    return (
        <div>
            <h1>{ten}</h1>
            <p>Tuổi: {tuoi}</p>
            <p>
                Quê quán: {queQuan}
            </p>
        </div>
    );
}
export default MyInfo;
2.Chào buổi sáng/chiều/tối
function Greeting() {
    const hour = new Date().getHours();

    return (
        <div>
            <h1>
                {
                    hour < 12
                        ? "Chào buổi sáng"
                        : hour < 18
                        ? "Chào buổi chiều"
                        : "Chào buổi tối"
                }
            </h1>
        </div>
    );
}

export default Greeting;

3.BMI = cân nặng / (chiều cao * chiều cao)
function BMI() {
    const canNang = 50;
    const chieuCao = 1.6;

    const bmi =
        canNang / (chieuCao * chieuCao);

    return (
        <div>
            <h1>Tính BMI</h1>

            <p>
                BMI: {bmi.toFixed(1)}
            </p>
        </div>
    );
}

export default BMI;

# Bài 2.2
Cách 1.Ternary ? :
function TernaryDemo() {
    const isLoggedIn = true;
    const score = 85;

    return (
        <div style={{ padding: "20px" }}>
            <h2>
                {
                    isLoggedIn
                    ? "Chào mừng bạn!"
                    : "Vui lòng đăng nhập"
                }
            </h2>

            <p>
                Kết quả:
                {
                    score >= 5
                    ? " Đậu"
                    : " Rớt"
                }
            </p>

            <p>
                Xếp loại:
                {
                    score >= 9 ? " Xuất sắc" :
                    score >= 8 ? " Giỏi" :
                    score >= 7 ? " Khá" :
                    score >= 5 ? " Trung bình" :
                    " Yếu"
                }
            </p>
        </div>
    );
}

export default TernaryDemo;

Cách 2. &&
function AndDemo() {
    const hasNotification = true;
    const notificationCount = 5;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thông báo</h2>

            {hasNotification && (
                <div
                    style={{
                        background: "#fff3cd",
                        padding: "10px"
                    }}
                >
                    Bạn có
                    {notificationCount}
                    thông báo mới!
                </div>
            )}

            {!hasNotification && (
                <p>Không có thông báo</p>
            )}
        </div>
    );
}

export default AndDemo;

1.Online/offline
function Status() {
    const online = true;

    return (
        <div>
            {
                online
                ? "🟢 Online"
                : "🔴 Offline"
            }
        </div>
    );
}

export default Status;

2.Hết hàng
function ProductStock() {
    const stock = 0;

    return (
        <div>
            <h1>iPhone 15</h1>

            {
                stock === 0 && (
                    <p style={{ color: "red" }}>
                        Hết hàng
                    </p>
                )
            }
        </div>
    );
}

export default ProductStock;

# Bài 2.3
-Danh sách sản phẩm
function ProductList() {
    const products = [
        {
            id: 1,
            name: "iPhone",
            price: 25000000
        },

        {
            id: 2,
            name: "AirPods",
            price: 5000000
        },

        {
            id: 3,
            name: "Chuột",
            price: 300000
        }
    ];

    const total = products.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>

            {
                products.map((product) => (
                    <div key={product.id}>
                        <p>
                            {product.name}
                        </p>

                        <p
                            style={{
                                color:
                                    product.price > 1000000
                                    ? "red"
                                    : "black"
                            }}
                        >
                            {product.price}
                        </p>
                    </div>
                ))
            }

            <h2>
                Tổng tiền:
                {total.toLocaleString()}đ
            </h2>
        </div>
    );
}

export default ProductList;