// ===== Xếp loại học lực =====

let diem = 8.5;

if (diem < 0 || diem > 10) {
    console.log("Điểm không hợp lệ");
}
else if (diem >= 9) {
    console.log("Xuất sắc");
}
else if (diem >= 8) {
    console.log("Giỏi");
}
else if (diem >= 7) {
    console.log("Khá");
}
else if (diem >= 5) {
    console.log("Trung bình");
}
else {
    console.log("Yếu");
}

// ===== Kiểm tra năm nhuận =====

let nam = 2024;

if (
    nam % 4 === 0 &&
    (nam % 100 !== 0 || nam % 400 === 0)
) {
    console.log(`${nam} là năm nhuận`);
} else {
    console.log(`${nam} không phải năm nhuận`);
}

// ===== Ternary =====

let so = 15;

let ketQua =
    so % 2 === 0
        ? "Số chẵn"
        : "Số lẻ";

console.log(ketQua);