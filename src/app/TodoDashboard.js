import { useEffect } from "react";
import { useProfileContext } from "context/ProfileContext";
import { useTodoListContext } from "context/TodoListContext";
import { useCurrentListContext } from "context/CurrentListContext";

import ListInput from "components/ui/lists/input/ListInput";
import ListDisplay from "components/ui/lists/display/ListDisplay";
import TodoInput from "components/ui/todos/input/TodoInput";
import TodoDisplay from "components/ui/todos/display/TodoDisplay";

const TodoDashboard = () => {
  // Hooks
  const { logoutHandler } = useProfileContext();
  const { todoLists } = useTodoListContext();
  const { currentList, updateCurrentListIDHandler } = useCurrentListContext();

  useEffect(() => {
    if (!currentList.id) {
      updateCurrentListIDHandler(todoLists[0].id);
    }
  }, [todoLists, currentList, updateCurrentListIDHandler]);

  return (
    <div>
      <div>
        <h1> React Todo App </h1>
      </div>

      <div>
        <h2>List selection</h2>
        <ListInput />
        <ListDisplay />
      </div>

      {/* TODO list */}
      <div>
        <h2>Todo list</h2>
        <TodoInput />
        <TodoDisplay />
      </div>

      <div>
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
    </div>
  );
};

export default TodoDashboard;
