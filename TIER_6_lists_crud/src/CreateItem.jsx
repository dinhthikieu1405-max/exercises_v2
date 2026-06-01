import { useState, useRef } from "react";

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" }
  ]);

  const [newName, setNewName] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const inputRef = useRef(null);

  function handleAdd() {
    if (newName.trim() === "") {
      alert(
        "Tên môn học không được trống"
      );
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newName
    };

    setItems([...items, newItem]);

    setSuccess(
      "✅ Đã thêm thành công!"
    );

    setNewName("");

    inputRef.current.focus();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm môn học</h2>

      <input
        ref={inputRef}
        value={newName}
        onChange={(e) =>
          setNewName(e.target.value)
        }
      />

      <button onClick={handleAdd}>
        Thêm
      </button>

      <p>{success}</p>

      {items.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default CreateItem;