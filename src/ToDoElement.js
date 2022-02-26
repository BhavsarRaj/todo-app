import React from "react";
import classes from "./toDoElement.module.css";

const toDoElement = (props) => {
  const marked = props.special ? undefined : (
    <span
      className={classes.check}
      onClick={props.clickMark}
      title="Mark as Done"
    >
      &#10004;
    </span>
  );
  return (
    <div className={classes.card}>
      <p>{props.toDo}</p>
      {marked}
      <span
        onClick={props.clickDelete}
        className={classes.delete}
        title="Delete"
      >
        &#10008;
      </span>
    </div>
  );
};

export default toDoElement;
