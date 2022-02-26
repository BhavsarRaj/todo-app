import React from "react";
import classes from "./addToDo.module.css";

const AddToDo = (props) => {
  return (
    <div className={classes.add}>
      <textarea ref={props.myRef} rows={3} cols={30}></textarea>
      <button onClick={props.click} type="button" className={classes.button}>
        Add ToDo
      </button>
    </div>
  );
};

export default AddToDo;
