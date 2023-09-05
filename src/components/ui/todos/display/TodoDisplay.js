import { useState, useEffect } from "react";
import { useTodoListContext } from "context/TodoListContext";
import { useCurrentListContext } from "context/CurrentListContext";

import TodoItem from "components/ui/todos/display/item/TodoItem";

const TodoDisplay = () => {
  // Hooks
  const { todoLists } = useTodoListContext();
  const { currentList } = useCurrentListContext();

  // States
  const [currentTodos, setCurrentTodos] = useState([]);

  // Conditional rendering lists using current list ID
  useEffect(() => {
    todoLists.map((list) => {
      if (list.id === currentList.id) {
        setCurrentTodos(list.todos);
      }
      return list;
    });
  }, [currentList, todoLists]);

  return (
    <ul>
      {currentTodos.map((todo) => {
        return <TodoItem key={todo.id} item={todo} />;
      })}
    </ul>
  );
};

export default TodoDisplay;
