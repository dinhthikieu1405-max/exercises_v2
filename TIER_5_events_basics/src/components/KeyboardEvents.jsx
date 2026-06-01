import { useState } from "react";

function KeyboardEvents() {
  const [lastKey, setLastKey] =
    useState("");

  const [inputValue, setInputValue] =
    useState("");

  const [log, setLog] = useState([]);

  function handleKeyDown(event) {
    setLastKey(event.key);

    setLog((prev) => [
      ...prev.slice(-4),
      event.key,
    ]);
  }

  function handleInputKeyDown(
    event
  ) {
    if (event.key === "Enter") {
      alert(
        "Bạn nhập: " + inputValue
      );
      setInputValue("");
    }

    if (event.key === "Escape") {
      setInputValue("");
    }
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ padding: "20px" }}
    >
      <h2>Keyboard Events</h2>

      <p>
        Phím cuối: {lastKey}
      </p>

      <p>
        Log: {log.join(" → ")}
      </p>

      <input
        value={inputValue}
        onChange={(e) =>
          setInputValue(
            e.target.value
          )
        }
        onKeyDown={
          handleInputKeyDown
        }
        placeholder="Nhập rồi Enter"
      />

      <p>
        Enter: gửi dữ liệu
      </p>

      <p>
        Escape: xóa dữ liệu
      </p>
    </div>
  );
}

export default KeyboardEvents;