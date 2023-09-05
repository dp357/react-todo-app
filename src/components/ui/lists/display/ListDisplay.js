import { useState } from "react";
import { useTodoListContext } from "context/TodoListContext";
import { useCurrentListContext } from "context/CurrentListContext";

const ListDisplay = () => {
  //Hooks
  const { todoLists, editListHandler, deleteListHandler } =
    useTodoListContext();
  const { currentList, updateCurrentListIDHandler } = useCurrentListContext();

  //States
  const [updatedList, setUpdatedList] = useState("");
  const [editListDropdown, setEditListDropdown] = useState(false);

  // Select todo list from options
  const listOptions = todoLists.map((list) => (
    <option value={list.id} key={list.id}>
      {list.name}
    </option>
  ));

  const editListSubmitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!updatedList) {
      alert("Please enter a list name!");
    } else {
      editListHandler(currentList.id, updatedList);
      setUpdatedList("");
    }
  };

  return (
    <div>
      {/* Current List Menu */}
      <form>
        <label>
          Current List:
          <select
            name="currentList"
            value={currentList.id}
            onChange={(event) => updateCurrentListIDHandler(event.target.value)}
          >
            {listOptions}
          </select>
        </label>
      </form>

      {/* Current List options */}
      <div>
        <button onClick={() => setEditListDropdown((previous) => !previous)}>
          Edit
        </button>

        <button
          onClick={() => {
            deleteListHandler(currentList.id);
            // Reset current list ID to default list ID after deletion
            updateCurrentListIDHandler(todoLists[0].id);
          }}
        >
          Delete
        </button>

        {editListDropdown && (
          <form onSubmit={editListSubmitHandler}>
            <label>
              <input
                type="text"
                placeholder="Edit List..."
                value={updatedList}
                onChange={(event) => setUpdatedList(event.target.value)}
              />
            </label>
            <button type="Submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ListDisplay;
