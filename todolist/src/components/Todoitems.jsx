import { useRef } from "react";
import styles from "./Todoitems.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";

const Todoitems = ({ onNewItem }) => {
  let TodoNameElement = useRef();
  let DueDateElement = useRef();

  const handleAddBtn = (event) => {
    if (TodoNameElement !== "" && DueDateElement !== "") {
      event.preventDefault();
      const TodoName = TodoNameElement.current.value;
      const DueDate = DueDateElement.current.value;
      TodoNameElement.current.value = "";
      DueDateElement.current.value = "";
      onNewItem(TodoName, DueDate);
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
