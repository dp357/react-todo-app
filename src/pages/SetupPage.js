import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "context/ProfileContext";
import { useTodoListContext } from "context/TodoListContext";

const SetupPage = () => {
  // Hooks
  const navigate = useNavigate();
  const { setupHandler, deleteProfileHandler } = useProfileContext();
  const { addListHandler } = useTodoListContext();

  // States
  const [defaultListName, setDefaultListName] = useState("");

  // Handlers
  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!defaultListName) {
      alert("Please enter a default todo list");
    } else {
      // Add data to context store
      addListHandler(defaultListName);
      setupHandler();

      // Reset state
      setDefaultListName([]);
    }
  };

  return (
    <div>
      <div>
        <h1>Initialize Todo App</h1>
      </div>

      {/* Default List Form */}
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Default Todo List{" "}
            <input
              type="text"
              placeholder="shopping,homework,..."
              value={defaultListName}
              onChange={(event) => setDefaultListName(event.target.value)}
            />
          </label>
        </div>

        <div>
          <button type="submit">Continue</button>
        </div>
      </form>

      <div>
        <button
          onClick={() => {
            deleteProfileHandler();
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SetupPage;
