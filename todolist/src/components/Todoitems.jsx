import { useContext, useRef } from "react";
import styles from "./Todoitems.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { TodoitemsContext } from "../store/TodoItemsStore";

const Todoitems = () => {
  const { addNewItem } = useContext(TodoitemsContext); //object destructuring

  let TodoNameElement = useRef();
  let DueDateElement = useRef();

  const handleAddBtn = (event) => {
    event.preventDefault();
    if (
      TodoNameElement.current.value !== "" &&
      DueDateElement.current.value !== ""
    ) {
      event.preventDefault();
      const TodoName = TodoNameElement.current.value;
      const DueDate = DueDateElement.current.value;
      TodoNameElement.current.value = "";
      DueDateElement.current.value = "";
      addNewItem(TodoName, DueDate);
    }
  };

  return (
    <form className={`row ${styles.todoInput}`} onSubmit={handleAddBtn}>
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter to-do items"
          ref={TodoNameElement}
        />
      </div>
      <div className="col-4">
        <input type="date" className="form-control" ref={DueDateElement} />
      </div>
      <div className="col-4">
        <button type="submit" className="btn btn-success">
          <MdOutlineLibraryAdd />
        </button>
      </div>
    </form>
  );
};

export default Todoitems;
