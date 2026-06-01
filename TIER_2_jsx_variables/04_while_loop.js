// ===== Giai thừa =====

let n = 5;

let giaiThua = 1;
let i = 1;

while (i <= n) {
    giaiThua *= i;
    i++;
}

console.log(
    `${n}! = ${giaiThua}`
);

// ===== Fibonacci đầu tiên > 1000 =====

let a = 0;
let b = 1;

while (b <= 1000) {
    let temp = a + b;
    a = b;
    b = temp;
}

console.log(
    "Fibonacci đầu tiên > 1000:",
    b
);

// ===== Số nguyên tố 2 -> 50 =====

let so = 2;

while (so <= 50) {
    let laSoNguyenTo = true;

    let j = 2;

    while (j < so) {
        if (so % j === 0) {
            laSoNguyenTo = false;
            break;
        }

        j++;
    }

    if (laSoNguyenTo) {
        console.log(so);
    }

    so++;
}
