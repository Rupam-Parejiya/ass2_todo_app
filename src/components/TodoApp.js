import React from "react";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",      // for input field
      taskList: []   // for storing all tasks
    };
  }

  // handle input change
  handleInput = (event) => {
    this.setState({ task: event.target.value });
  };

  // add task
  addTask = () => {
    if (this.state.task === "") {
      alert("Please enter a task before adding!");
    } else {
      // add new task in list
      const newList = this.state.taskList.concat(this.state.task);
      this.setState({
        taskList: newList,
        task: ""
      });
      alert("Task added successfully!");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>📝 Simple To-Do App</h2>

        <input
          type="text"
          placeholder="Enter your task..."
          value={this.state.task}
          onChange={this.handleInput}
        />
        <button onClick={this.addTask}>Add</button>

        <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
          {this.state.taskList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
