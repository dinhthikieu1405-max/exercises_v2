// ===== Thứ trong tuần =====

let ngay = 2;

switch (ngay) {
    case 1:
        console.log("Thứ Hai");
        break;

    case 2:
        console.log("Thứ Ba");
        break;

    case 3:
        console.log("Thứ Tư");
        break;

    case 4:
        console.log("Thứ Năm");
        break;

    case 5:
        console.log("Thứ Sáu");
        break;

    case 6:
        console.log("Thứ Bảy");
        break;

    case 0:
        console.log("Chủ Nhật");
        break;

    default:
        console.log("Không hợp lệ");
}

// ===== Máy tính đơn giản =====

let a = 20;
let b = 5;
let phepTinh = "*";

switch (phepTinh) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Phép tính không hợp lệ");
}