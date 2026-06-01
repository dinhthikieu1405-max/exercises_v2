function TodoItem({
  todo,
  onToggle,
  onDelete,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        margin: "5px 0",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: todo.done
          ? "#f0fff0"
          : "#fff",
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() =>
          onToggle(todo.id)
        }
      />

      <span
        style={{
          flex: 1,
          marginLeft: "10px",
          textDecoration: todo.done
            ? "line-through"
            : "none",
          color: todo.done
            ? "#888"
            : "#000",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          onDelete(todo.id)
        }
      >
        🗑
      </button>
    </div>
  );
}

export default TodoItem;