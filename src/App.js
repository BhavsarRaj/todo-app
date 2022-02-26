import React, { Component, createRef } from "react";
import Header from "./Header.js";
import AddToDo from "./AddToDo.js";
import ToDoLists from "./ToDoLists.js";
import Marker from "./Marker.js";
import classes from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      markedDoneToDoList: [],
      markedDoneToDo: 0,
      pendingToDo: 0
    };
    this.myRef = createRef();
  }

  addToDoHandler = () => {
    const toDoValue = this.myRef.current.value;
    if (toDoValue === "") {
      alert("Please first write your ToDo!");
      return;
    }
    const newList = [...this.state.toDoList];
    this.myRef.current.value = null;
    newList.push(toDoValue);
    const newPendingToDo = this.state.pendingToDo + 1;
    this.setState({
      toDoList: newList,
      pendingToDo: newPendingToDo
    });
  };

  markDoneToDoHandler = (index) => {
    const newList = [...this.state.toDoList];
    const marked = newList.splice(index, 1)[0];
    const newMarkedDoneToDo = this.state.markedDoneToDo + 1;
    const newMarkedList = [...this.state.markedDoneToDoList];
    const newPendingToDo = this.state.pendingToDo - 1;
    newMarkedList.push(marked);
    this.setState({
      toDoList: newList,
      markedDoneToDoList: newMarkedList,
      markedDoneToDo: newMarkedDoneToDo,
      pendingToDo: newPendingToDo
    });
  };

  deleteToDoHandler = (index, flag) => {
    if (
      window.confirm(
        "Are you sure you want to delete as once deleted you cannot recover it back"
      )
    ) {
      if (flag === 0) {
        const newList = [...this.state.toDoList];
        newList.splice(index, 1);
        const newPendingToDo = this.state.pendingToDo - 1;
        this.setState({
          toDoList: newList,
          pendingToDo: newPendingToDo
        });
      } else if (flag === 1) {
        const newList = [...this.state.markedDoneToDoList];
        newList.splice(index, 1);
        const newMarkedDoneToDo = this.state.markedDoneToDo - 1;
        this.setState({
          markedDoneToDoList: newList,
          markedDoneToDo: newMarkedDoneToDo
        });
      }
    }
  };

  render() {
    return (
      <div className={classes["*"]}>
        <Header />
        <AddToDo click={this.addToDoHandler} myRef={this.myRef} />
        <Marker
          pending={this.state.pendingToDo}
          completed={this.state.markedDoneToDo}
        />
        <ToDoLists
          lists={this.state.toDoList}
          info="No ToDos Pending!"
          clickMarked={this.markDoneToDoHandler}
          clickDeleted={this.deleteToDoHandler}
          display="Pending Section"
        />
        <ToDoLists
          lists={this.state.markedDoneToDoList}
          info="Empty!"
          special={true}
          clickDeleted={this.deleteToDoHandler}
          display="Completed Section"
        />
      </div>
    );
  }
}

export default App;
