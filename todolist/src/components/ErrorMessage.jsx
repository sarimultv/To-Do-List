import { useContext } from "react";
import { TodoitemsContext } from "../store/TodoItemsStore";
import "./ErrorMessage.module.css";

const ErrorMessage = () => {
  const { todoItems } = useContext(TodoitemsContext); //object destructuring
  // let todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && <p>To-Do items not available, Chill...!!!</p>
  );
};

export default ErrorMessage;
