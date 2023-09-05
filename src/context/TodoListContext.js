import { createContext, useContext } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

import { v4 as uuidv4 } from "uuid";

const TodoListContext = createContext(null);

export const TodoListProvider = ({ children }) => {
  // State
  const [todoLists, setTodoLists] = useLocalStorage("todoList", []);

  const addListHandler = (newListName) => {
    setTodoLists([
      ...todoLists,
      {
        id: uuidv4(),
        name: newListName,
        todos: [],
      },
    ]);
  };

  const editListHandler = (currentListID, updatedListName) => {
    setTodoLists(
      todoLists.map((list) => {
        if (list.id === currentListID) {
          return {
            ...list,
            name: updatedListName,
          };
        }
        return list;
      })
    );
  };

  const deleteListHandler = (currentListID) => {
    if (todoLists.find((list) => list.id === currentListID) === todoLists[0]) {
      alert("Cannot delete default list!");
    } else {
      setTodoLists(todoLists.filter((list) => list.id !== currentListID));
    }
  };

  // Todo Handlers
  const addTodoHandler = (currentListID, newTodo) => {
    setTodoLists(
      todoLists.map((list) => {
        if (list.id === currentListID) {
          return {
            ...list,
            todos: [
              ...list.todos,
              {
                id: uuidv4(),
                name: newTodo,
                isCompleted: false,
              },
            ],
          };
        }
        return list;
      })
    );
  };

  const toggleTodoHandler = (currentListID, itemID) => {
    const updatedTodos = todoLists
      .find((list) => list.id === currentListID)
      .todos.map((todo) => {
        if (todo.id === itemID) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });

    setTodoLists(
      todoLists.map((list) => {
        if (list.id === currentListID) {
          return {
            ...list,
            todos: updatedTodos,
          };
        }
        return list;
      })
    );
  };

  const editTodoHandler = (currentListID, itemID, updatedItemName) => {
    const updatedTodos = todoLists
      .find((list) => list.id === currentListID)
      .todos.map((todo) => {
        if (todo.id === itemID) {
          return {
            ...todo,
            name: updatedItemName,
          };
        }
        return todo;
      });

    setTodoLists(
      todoLists.map((list) => {
        if (list.id === currentListID) {
          return {
            ...list,
            todos: updatedTodos,
          };
        }
        return list;
      })
    );
  };

  const deleteTodoHandler = (currentListID, itemID) => {
    const updatedTodos = todoLists
      .find((list) => list.id === currentListID)
      .todos.filter((todo) => todo.id !== itemID);

    setTodoLists(
      todoLists.map((list) => {
        if (list.id === currentListID) {
          return {
            ...list,
            todos: updatedTodos,
          };
        }
        return list;
      })
    );
  };

  return (
    <TodoListContext.Provider
      value={{
        todoLists,
        addListHandler,
        editListHandler,
        deleteListHandler,
        addTodoHandler,
        toggleTodoHandler,
        editTodoHandler,
        deleteTodoHandler,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext);
