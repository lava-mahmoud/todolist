import React from "react";

export default class DisplayTodo extends React.Component {
  render() {
    return (
      <div>
        <table className="table  ">
          <thead></thead>
          <tbody>
            {this.props.items.map((item, index) => (
              <tr key={index} id={index}>
                <td>
                  <input
                    type="checkbox"
                    name={item.term}
                    onClick={this.props.handleCheck.bind(this, item)}
                  />
                </td>

                <td>
                  <label
                    style={
                      item.checked
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.term}
                  </label>
                </td>

                {/*  <td>
                  <button onClick={this.addProduct}>+</button>
                </td> */}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={this.props.deleteToDo.bind(this, item)}
                  >
                    x
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
