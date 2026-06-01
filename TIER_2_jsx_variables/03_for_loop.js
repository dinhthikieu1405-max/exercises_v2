// ===== In số chẵn =====

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ===== Tìm số lớn nhất =====

let arr = [4, 7, 2, 9, 1, 5];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Max =", max);

// ===== Đếm số chia hết cho 3 =====

let dem = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        dem++;
    }
}

console.log(
    "Có",
    dem,
    "số chia hết cho 3"
);

// ===== for...of =====

let monHoc = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

for (let mon of monHoc) {
    console.log(mon);
}

// ===== for...in =====

let sinhVien = {
    ten: "Minh",
    tuoi: 20,
    lop: "CNTT"
};

for (let key in sinhVien) {
    console.log(
        key,
        sinhVien[key]
    );
}