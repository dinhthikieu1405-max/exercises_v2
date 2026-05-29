# Bài 1.1
1.Component chỉ render 1 lần bởi component được mount lần đầu,không có state thay đổi ,không có props thay dổi nên React không cần render lại.
2.Component render lại khi state đổi; props đổi thì component cha truyền dữ liệu xuống ; parent re-render 

# Bài 1.2 
Chạy BadCounter → nhấn nút → thấy count = 0;UI hiện: bộ đếm: 0
->Nhấn nút : count = count + 1

Chạy GoodCounter → nhấn nút → thấy setCount(count + 1)
Mở Console → thấy log "render" vì component render lại

# Bài 1.3.
React flow
Component render
    ↓
JSX hiển thị
    ↓
User click / nhập
    ↓
setState()
    ↓
React render lại
    ↓
JSX mới
    ↓
UI cập nhật

FlowDemo
import { useState } from "react";

function FlowDemo() {
    console.log("🔄 Component render!");

    const [step, setStep] = useState(1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Luồng hoạt động</h2>

            <p>Bước hiện tại: {step}</p>

            <button
                onClick={() => setStep(step + 1)}
            >
                Bước tiếp theo →
            </button>

            <button
                onClick={() => setStep(1)}
            >
                Quay lại đầu
            </button>

            <div
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    background: "#f0f0f0"
                }}
            >
                {step === 1 && (
                    <p>👋 Bước 1: Xin chào!</p>
                )}

                {step === 2 && (
                    <p>📖 Bước 2: Đang học React</p>
                )}

                {step === 3 && (
                    <p>🎯 Bước 3: Hiểu useState</p>
                )}

                {step === 4 && (
                    <p>🎉 Bước 4: Hoàn thành!</p>
                )}
            </div>
        </div>
    );
}

export default FlowDemo;