import { useState } from "react";
import { useTodoListContext } from "context/TodoListContext";

const ListInput = () => {
  // Hooks
  const { addListHandler } = useTodoListContext();

  // States
  const [newList, setNewList] = useState("");

  // Handlers
  const addListSubmitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!newList) {
      alert("Please enter a list name!");
    } else {
      addListHandler(newList);
      setNewList("");
    }
  };

  return (
    <div>
      {/* Add List Form */}
      <form onSubmit={addListSubmitHandler}>
        <label>
          <input
            type="text"
            placeholder="Add list..."
            value={newList}
            onChange={(event) => setNewList(event.target.value)}
          />
        </label>
        <button type="Submit">Add</button>
      </form>
    </div>
  );
};

export default ListInput;
