import ShowTodoItemUI from "./ShowTodoItemUI";

const ShowTodoItem = ({ todoItems, handleDeleteBtn }) => {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <ShowTodoItemUI
            key={item.todoItem}
            todoNewName={item.todoItem}
            todoDueDate={item.todoDate}
            handleDeleteBtn={handleDeleteBtn}
          />
        );
      })}
    </>
  );
};

export default ShowTodoItem;
