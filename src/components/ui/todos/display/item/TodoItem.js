import { useState } from "react";
import { useTodoListContext } from "context/TodoListContext";
import { useCurrentListContext } from "context/CurrentListContext";

const TodoItem = ({ item }) => {
  // Hooks
  const { toggleTodoHandler, editTodoHandler, deleteTodoHandler } =
    useTodoListContext();
  const { currentList } = useCurrentListContext();

  // States
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [editTodoDropdown, setEditTodoDropdown] = useState(false);

  // Handlers
  const editTodoSubmitHandler = (event) => {
    event.preventDefault();

    if (!updatedTodo) {
      alert("Please enter a todo item");
    } else {
      editTodoHandler(currentList.id, item.id, updatedTodo);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => toggleTodoHandler(currentList.id, item.id)}
      />

      {item.name}

      <button onClick={() => setEditTodoDropdown((previous) => !previous)}>
        Edit
      </button>

      <button onClick={() => deleteTodoHandler(currentList.id, item.id)}>
        Delete
      </button>

      {editTodoDropdown && (
        <form onSubmit={editTodoSubmitHandler}>
          <label>
            <input
              type="text"
              placeholder="Edit Todo..."
              value={updatedTodo}
              onChange={(event) => setUpdatedTodo(event.target.value)}
            />
          </label>
          <button type="Submit">Submit</button>
        </form>
      )}
    </li>
  );
};

export default TodoItem;
