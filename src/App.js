import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [], text: "" };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      item: this.state.item.concat(this.state.text),
      text: ""
    });
  };

  handleDelete = index => {
    this.state.item.splice(index, 1);
    this.setState({
      item: this.state.item
    });
  };

  handleEdit = (index, text) => {
    this.state.item.splice(index, 1, text);
    this.setState({
      item: this.state.item,
      text: ""
    });
  };

  render() {
    console.log(this.state.item);
    const { item, text } = this.state;
    return (
      <>
        <ol>
          {item.map((key, index) => (
            <li key={index}>
              {key}
              <br />
              <button onClick={() => this.handleDelete(index)}>delete</button>

              <button onClick={() => this.handleEdit(index, text)}>edit</button>
            </li>
          ))}
        </ol>

        <input value={this.state.text} onChange={this.handleChange}></input>

        <button onClick={this.handleClick}>sange</button>
      </>
    );
  }
}

export default App;
