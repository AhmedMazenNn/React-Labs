import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddToDo = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    const newItem = { completed: false, value };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">To Do List</h2>
      <div className="d-flex mb-3">
        <input
          ref={inputRef}
          className="form-control me-2"
          placeholder="Enter a task"
          onKeyDown={(e) => e.key === 'Enter' && handleAddToDo()}
        />
        <button className="btn btn-primary" onClick={handleAddToDo}>Add</button>
      </div>
      <ul className="list-group">
        {todos.map(({ value, completed }, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              onClick={() => handleItemDone(index)}
              role="button"
              className={completed ? "text-decoration-line-through" : ""}
            >
              {value}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
