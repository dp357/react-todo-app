import { useState } from "react";
import { useTodoListContext } from "context/TodoListContext";
import { useCurrentListContext } from "context/CurrentListContext";

const TodoInput = () => {
  // Hooks
  const { addTodoHandler } = useTodoListContext();
  const { currentList } = useCurrentListContext();

  // States
  const [newTodo, setNewTodo] = useState("");

  // Handlers
  const addTodoSubmitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!newTodo) {
      alert("Please add a todo item");
    } else {
      addTodoHandler(currentList.id, newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={addTodoSubmitHandler}>
      <label>
        <input
          type="text"
          placeholder="Add todo..."
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
