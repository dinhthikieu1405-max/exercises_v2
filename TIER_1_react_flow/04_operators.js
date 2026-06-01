// ===== TOÁN TỬ SỐ HỌC =====

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// ===== CHUỖI =====

let ho = "Nguyễn";
let ten = "Minh";

let hoTen = ho + " " + ten;

console.log(hoTen);

console.log(`Xin chào ${hoTen}`);

// ===== SO SÁNH =====

console.log(5 == "5");
console.log(5 === "5");

console.log(5 != "5");
console.log(5 !== "5");

console.log(10 > 5);
console.log(10 < 5);

// ===== LOGIC =====

let diemTB = 7.5;
let soTinChi = 130;

console.log(
    diemTB >= 5 &&
    soTinChi >= 120
);

console.log(
    diemTB >= 8 ||
    soTinChi >= 120
);

console.log(!(diemTB < 5));

// ===== THỬ THÁCH =====

const PI = 3.14;
const banKinh = 5;

const dienTich =
    PI * banKinh ** 2;

console.log(
    "Diện tích hình tròn:",
    dienTich
);

let tenSV = "Minh";

console.log(
    `Sinh viên ${tenSV} đạt điểm ${diemTB}`
);