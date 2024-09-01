import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowTodoItem from "./components/ShowTodoItem";
import Todoitems from "./components/Todoitems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let [todoItems, setNewTodoItems] = useState([]);

  const onNewItem = (TodoName, DueDate) => {
    let newTodo = [...todoItems, { todoItem: TodoName, todoDate: DueDate }];
    setNewTodoItems(newTodo);
  };

  const handleDeleteBtn = (deletedTodoItem) => {
    let newTodoItems = todoItems.filter(
      (item) => item.todoItem !== deletedTodoItem
    );
    setNewTodoItems(newTodoItems);
  };

  return (
    <center className="content-div">
      <Header />
      <Todoitems onNewItem={onNewItem} />
      {todoItems.length === 0 && <ErrorMessage />}
      <ShowTodoItem todoItems={todoItems} handleDeleteBtn={handleDeleteBtn} />
    </center>
  );
}

export default App;
