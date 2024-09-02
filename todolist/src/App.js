import "./App.css";
import Header from "./components/Header";
import ShowTodoItem from "./components/ShowTodoItem";
import Todoitems from "./components/Todoitems";
import ErrorMessage from "./components/ErrorMessage";
import TodoitemsContextProvider from "./store/TodoItemsStore";

function App() {
  return (
    <TodoitemsContextProvider>
      <center className="content-div">
        <Header />
        <Todoitems />
        <ErrorMessage />
        <ShowTodoItem />
      </center>
    </TodoitemsContextProvider>
  );
}

export default App;
