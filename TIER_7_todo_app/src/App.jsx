import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter(
    (todo) => !todo.done
  ).length;

  const completedCount = todos.filter(
    (todo) => todo.done
  ).length;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        📋 Todo List
      </h1>

      <div
        style={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Nhập công việc..."
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={addTodo}>
          Thêm
        </button>
      </div>

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      {filteredTodos.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#999",
          }}
        >
          {todos.length === 0
            ? "📝 Chưa có công việc nào"
            : "Không có công việc phù hợp"}
        </p>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))
      )}

      {todos.length > 0 && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#f5f5f5",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            {activeCount} việc chưa hoàn thành
          </span>

          <span>
            {completedCount} việc đã xong
          </span>
        </div>
      )}
    </div>
  );
}

export default App;