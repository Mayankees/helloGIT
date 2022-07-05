// rcc -> react class component
import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Revise JS" },
        { id: 2, task: "Revise DSA Level-1" },
      ],
      curTask: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.curTask, id: this.state.tasks.length + 1 },
      ],
      curTask: "",
    });
  };

  handleDelete = (id) => {
    // let nArr = [];
    console.log("Handling delete button");
    let nArr = this.state.tasks.filter((obj) => {
      return obj.id != id;
    });
    this.setState({
      tasks: [...nArr],
    });
  };

  render() {
    console.log("Calling Render");
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.curTask}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {
          // use {} when need to write JS
          this.state.tasks.map((taskObj) => {
            // can use bind function instead of arrow function
            return (
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button
                  onClick={() => {
                    this.handleDelete(taskObj.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })
        }
      </React.Fragment>
    );
  }
}
