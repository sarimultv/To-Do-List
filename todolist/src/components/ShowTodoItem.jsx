import { useContext } from "react";
import { TodoitemsContext } from "../store/TodoItemsStore";
import ShowTodoItemUI from "./ShowTodoItemUI";

const ShowTodoItem = () => {
  const { todoItems } = useContext(TodoitemsContext); //object destructuring
  // let todoItems = contextObj.todoItems;

  return (
    <>
      {todoItems.map((item) => {
        return (
          <ShowTodoItemUI
            key={item.todoItem}
            todoNewName={item.todoItem}
            todoDueDate={item.todoDate}
          />
        );
      })}
    </>
  );
};

export default ShowTodoItem;
