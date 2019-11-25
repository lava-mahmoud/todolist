import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    term: ""
  };
  handleChange = event => {
    const targetName = event.target.name;
    console.log(event.target.value);

    const targetValue = event.target.value;
    this.setState({
      [targetName]: targetValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("hallo");

    this.props.addItem(this.state);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div>
        <from onSubmit={this.handleSubmit}>
          <input
            name="term"
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="add to do from input" />
          <button onClick={this.handleSubmit}>add to do </button>
        </from>
      </div>
    );
  }
}
