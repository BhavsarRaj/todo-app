import React from "react";
import ToDoElement from "./ToDoElement.js";
import classes from "./toDoLists.module.css";

const toDoLists = (props) => {
  const flag = props.special ? 1 : 0;
  let elements = props.lists.map((value, index) => {
    return (
      <ToDoElement
        clickMark={() => props.clickMarked(index)}
        clickDelete={() => props.clickDeleted(index, flag)}
        toDo={value}
        key={value}
        special={props.special}
      />
    );
  });

  if (elements.length === 0) {
    elements = (
      <p style={{ textAlign: "center", fontSize: "17px" }}>{props.info}</p>
    );
  }
  return (
    <fieldset className={classes.boundary}>
      <legend>{props.display}</legend>
      {elements}
    </fieldset>
  );
};

export default toDoLists;
