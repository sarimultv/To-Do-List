import { createContext, useReducer } from "react";

// useContext hook functonality

export const TodoitemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// useReducer() hook functonality

// todoItemsReducer() is a pure function which take current state, & action as arguments and returns new state
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { todoItem: action.payload.TodoName, todoDate: action.payload.DueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todoItem !== action.payload.TodoName
    );
  }
  return newTodoItems;
};

const TodoitemsContextProvider = ({ children }) => {
  //useReducer() take pure function and initial value as arguments
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (TodoName, DueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        TodoName,
        DueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (deletedTodoItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        TodoName: deletedTodoItem,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoitemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoitemsContext.Provider>
  );
};

export default TodoitemsContextProvider;
