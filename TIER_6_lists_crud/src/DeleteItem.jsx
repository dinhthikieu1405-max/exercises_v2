import { useState } from "react";

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" },
    { id: 3, name: "Linh" }
  ]);

  const [message, setMessage] =
    useState("");

  function handleDelete(item) {
    const confirmDelete =
      window.confirm(
        `Xóa ${item.name}?`
      );

    if (!confirmDelete) return;

    setItems(
      items.filter(
        (i) => i.id !== item.id
      )
    );

    setMessage(
      `Đã xóa ${item.name}`
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Xóa sinh viên</h2>

      <p>{message}</p>

      {items.length === 0 ? (
        <p>Danh sách trống</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent:
                "space-between"
            }}
          >
            <span>{item.name}</span>

            <button
              onClick={() =>
                handleDelete(item)
              }
            >
              Xóa
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DeleteItem;