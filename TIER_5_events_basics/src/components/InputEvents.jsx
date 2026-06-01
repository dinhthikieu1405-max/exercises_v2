import { useState } from "react";

function InputEvents() {
  const [text, setText] = useState("");
  const [email, setEmail] =
    useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Input Events</h2>

      <input
        value={text}
        onChange={handleChange}
        maxLength={100}
        placeholder="Nhập văn bản..."
      />

      <p>
        Ký tự: {text.length}/100
      </p>

      <p>Số từ: {wordCount}</p>

      <p>Preview: {text}</p>

      <hr />

      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      {email.includes("@") ? (
        <p style={{ color: "green" }}>
          Email hợp lệ
        </p>
      ) : (
        <p style={{ color: "red" }}>
          Email chưa hợp lệ
        </p>
      )}
    </div>
  );
}

export default InputEvents;