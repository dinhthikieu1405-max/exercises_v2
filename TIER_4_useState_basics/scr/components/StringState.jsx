import { useState } from "react";

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin người dùng</h2>

      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() =>
          setShowPassword(!showPassword)
        }
      >
        {showPassword ? "Ẩn" : "Hiện"}
      </button>

      <hr />

      <p>Tên: {name}</p>

      <p>Email: {email}</p>

      <p>{name.length}/100 ký tự</p>

      {email.includes("@") ? (
        <p style={{ color: "green" }}>
          Email hợp lệ
        </p>
      ) : (
        <p style={{ color: "red" }}>
          Email chưa hợp lệ
        </p>
      )}

      {name && (
        <h3>Xin chào {name}!</h3>
      )}
    </div>
  );
}

export default StringState;