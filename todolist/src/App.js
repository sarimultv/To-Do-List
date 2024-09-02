import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowTodoItem from "./components/ShowTodoItem";
import Todoitems from "./components/Todoitems";
import ErrorMessage from "./components/ErrorMessage";
import { TodoitemsContext } from "./store/TodoItemsStore";

function App() {
  let [todoItems, setNewTodoItems] = useState([]);

  const addNewItem = (TodoName, DueDate) => {
    setNewTodoItems((currVal) => [
      ...currVal,
      { todoItem: TodoName, todoDate: DueDate },
    ]);
  };

  const deleteItem = (deletedTodoItem) => {
    let newTodoItems = todoItems.filter(
      (item) => item.todoItem !== deletedTodoItem
    );
    setNewTodoItems(newTodoItems);
  };

  return (
    <TodoitemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="content-div">
        <Header />
        <Todoitems />
        <ErrorMessage />
        <ShowTodoItem />
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
