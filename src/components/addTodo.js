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
      <div className="col-lg-12">
        <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand">ADD TO DO</p>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <input
              name="term"
              value={this.state.term}
              onChange={this.handleChange}
              className="form-control mr-sm-2"
              type="text"
              placeholder="add To do "
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              //onClick={this.handleSubmit}
              type="submit"
            >
              add to do
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
