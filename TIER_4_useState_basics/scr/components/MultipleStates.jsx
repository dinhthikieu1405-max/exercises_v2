import { useState } from "react";

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isStudent, setIsStudent] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit() {
    if (
      name.trim() === "" ||
      age === "" ||
      email === ""
    ) {
      alert("Vui lòng nhập đầy đủ");
      return;
    }

    if (age <= 0 || age >= 100) {
      alert(
        "Tuổi phải từ 1 đến 99"
      );
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setAge("");
    setEmail("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form đăng ký</h2>

      {!submitted ? (
        <>
          <input
            type="text"
            placeholder="Tên"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <br />
          <br />

          <input
            type="number"
            placeholder="Tuổi"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <br />
          <br />

          <label>
            <input
              type="checkbox"
              checked={isStudent}
              onChange={(e) =>
                setIsStudent(
                  e.target.checked
                )
              }
            />
            Là sinh viên
          </label>

          <br />
          <br />

          {name && (
            <p>
              Xin chào {name}!
            </p>
          )}

          <button
            onClick={handleSubmit}
          >
            Đăng ký
          </button>
        </>
      ) : (
        <>
          <h3>
            ✅ Đăng ký thành công
          </h3>

          <p>Tên: {name}</p>
          <p>Tuổi: {age}</p>
          <p>Email: {email}</p>

          <p>
            Sinh viên:{" "}
            {isStudent
              ? "Có"
              : "Không"}
          </p>

          <button
            onClick={handleReset}
          >
            Đăng ký lại
          </button>
        </>
      )}
    </div>
  );
}

export default MultipleStates;