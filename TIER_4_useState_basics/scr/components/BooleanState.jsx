import { useState } from "react";

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDarkMode
          ? "#333"
          : "#fff",
        color: isDarkMode
          ? "#fff"
          : "#000",
      }}
    >
      <h2>Boolean State</h2>

      <button
        onClick={() =>
          setIsVisible(!isVisible)
        }
      >
        {isVisible
          ? "Ẩn nội dung"
          : "Hiện nội dung"}
      </button>

      {isVisible && (
        <p>Nội dung đang hiển thị</p>
      )}

      <hr />

      <button
        onClick={() =>
          setIsDarkMode(!isDarkMode)
        }
      >
        {isDarkMode
          ? "☀️ Light Mode"
          : "🌙 Dark Mode"}
      </button>

      <hr />

      <button
        onClick={() =>
          setIsLiked(!isLiked)
        }
      >
        {isLiked
          ? "❤️ Đã thích"
          : "🤍 Thích"}
      </button>

      <hr />

      <button
        onClick={() =>
          setIsLightOn(!isLightOn)
        }
      >
        {isLightOn
          ? "💡 Bật"
          : "⚫ Tắt"}
      </button>
    </div>
  );
}

export default BooleanState;