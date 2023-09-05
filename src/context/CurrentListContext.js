import { useState, createContext, useContext } from "react";

const CurrentListContext = createContext("");

export const CurrentListProvider = ({ children }) => {
  // States
  const [currentList, setCurrentList] = useState({});

  // Handlers
  const updateCurrentListIDHandler = (updatedCurrentListID) => {
    setCurrentList({
      ...currentList,
      id: updatedCurrentListID,
    });
  };

  return (
    <CurrentListContext.Provider
      value={{
        currentList,
        updateCurrentListIDHandler,
      }}
    >
      {children}
    </CurrentListContext.Provider>
  );
};

export const useCurrentListContext = () => useContext(CurrentListContext);
