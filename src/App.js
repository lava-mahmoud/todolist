import React, { Component } from "react";

import "./App.css";
import DisplayTodo from "./components/displayTodo";
import AddToDo from "./components/addTodo";
export class App extends Component {
  state = {
    items: [
      {term:"go to bed",checked: false},
      {term: "eate Breakfast",checked: false},
       {term:"go to school",checked:false}]
  };
  addItem = terms => {
    console.log("i am term", terms.term);
    const newState = this.state.items;
    var item={term:terms.term,checked:false};
    newState.push(item);
    console.log("haaallo", newState);
    this.setState({ newState });
  };
  deleteToDo = item => {
    console.log(item);
    const index = this.state.items.indexOf(item);
    console.log(index);
    // eslint-disable-next-line
    const newState = this.state.items.splice(index, 1);
    console.log(this.state);

    //this.state.items.splice(this.state.items.indexOf(item), 1);
    this.forceUpdate();
  };

  handleCheck = (item) => {
    const index=this.state.items.indexOf(item);
    // console.log(index);
    // console.log(this.state.items[index]);
    // console.log("before",!this.state.items[index].checked);
     // eslint-disable-next-line
    this.state.items[index].checked=!this.state.items[index].checked;
    //console.log("AFTER",!this.state.items[index].checked);
    
    this.forceUpdate();
  };
  render() {
    return (
      <div className='container'>
        <AddToDo addItem={this.addItem} />
        <DisplayTodo
          items={this.state.items}
          deleteToDo={this.deleteToDo}
          handleCheck={this.handleCheck}
        ></DisplayTodo>
        
      </div>
    );
  }
}
export default App;
