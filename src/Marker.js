import React from "react";
import classes from "./marker.module.css";

const marker = (props) => {
  return (
    <div className={classes.gridContainer}>
      <p className={classes.gridItem}>Pending: {props.pending}</p>
      <p className={[classes.gridItem, classes.paddingLeft].join(" ")}>
        Completed: {props.completed}
      </p>
    </div>
  );
};

export default marker;
