import { useState } from "react";

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 }
  ]);

  const [editingId, setEditingId] =
    useState(null);

  const [editName, setEditName] =
    useState("");

  const [editAge, setEditAge] =
    useState("");

  const [saved, setSaved] =
    useState("");

  function startEdit(item) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditAge(item.age);
  }

  function saveEdit() {
    if (editName.trim() === "") {
      alert(
        "Tên không được để trống"
      );
      return;
    }

    setItems(
      items.map((item) =>
        item.id === editingId
          ? {
              ...item,
              name: editName,
              age: Number(editAge)
            }
          : item
      )
    );

    setSaved("✅ Đã lưu!");

    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sửa sinh viên</h2>

      <p>{saved}</p>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "10px"
          }}
        >
          {editingId === item.id ? (
            <>
              <input
                value={editName}
                onChange={(e) =>
                  setEditName(
                    e.target.value
                  )
                }
                style={{
                  border:
                    "2px solid orange"
                }}
              />

              <input
                type="number"
                value={editAge}
                onChange={(e) =>
                  setEditAge(
                    e.target.value
                  )
                }
              />

              <button
                onClick={saveEdit}
              >
                Lưu
              </button>

              <button
                onClick={
                  cancelEdit
                }
              >
                Hủy
              </button>
            </>
          ) : (
            <>
              {item.name} -{" "}
              {item.age} tuổi

              <button
                onClick={() =>
                  startEdit(item)
                }
              >
                Sửa
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UpdateItem;