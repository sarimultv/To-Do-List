import { useState } from "react";
import styles from "./ShowTodoItemUI.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ShowTodoItemUI = ({ todoNewName, todoDueDate, handleDeleteBtn }) => {
  let [checked, setChecked] = useState("");

  const handleCheckBox = () => {
    if (checked === "") {
      setChecked("text-decoration-line-through");
    } else {
      setChecked("");
    }
  };

  return (
    <div className={`row ${styles.showItem}`}>
      <div className={`col-4 ${checked} ${styles.textAlign}`}>
        <input
          type="checkbox"
          onClick={handleCheckBox}
          className={styles.checkBox}
        />
        <p>{todoNewName}</p>
      </div>
      <div className={`col-4 ${checked}`}>
        <p>{todoDueDate}</p>
      </div>
      <div className="col-4">
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteBtn(todoNewName)}
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};

export default ShowTodoItemUI;
