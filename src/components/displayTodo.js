import React from "react";

export default class DisplayTodo extends React.Component {
  render() {
    return (
      <div>
        <table className="table  ">
          <tbody>
            {this.props.items.map((item, index) => (
              <tr id={index}>
                <td>
                  <input
                    type="checkbox"
                    name={item.term}
                   
        
                    onClick={this.props.handleCheck.bind(this, item)}
                  />
                </td>

                <td>
                  <label
                  style=
                  {item.checked
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }}>

                  {item.term}</label>
                </td>

                <td>
                  <button onClick={this.addProduct}>+</button>
                </td>
                <td>
                  <button onClick={this.props.deleteToDo.bind(this, item)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
