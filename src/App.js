import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Table, Navbar, Modal } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [], edit: null, text: "", isopen: false };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  handleDelete = index => {
    this.state.item.splice(index, 1);
    this.setState({
      item: this.state.item
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      item: this.state.item.concat(this.state.text),
      text: ""
    });
  };

  handlePostEdit = e => {
    e.preventDefault();
    var items = this.state.item;
    var citrus = items.splice(this.state.edit.index, 1, this.state.text);
    this.setState({
      item: items,
      text: "",
      edit: null
    });
  };

  handleEdit = (e, index, key) => {
    e.preventDefault();
    this.setState({
      edit: { index, key },
      text: key
    });
  };

  render() {
    console.log(this.state.text);

    const { item } = this.state;
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Todo-List
          </Navbar.Brand>
        </Navbar>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Aktifitas</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {item.map((key, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{key}</td>
                <td>
                  <Button
                    onClick={e => this.handleEdit(e, index, key)}
                    variant="success"
                    type="submit"
                    size="sm"
                    fullwidth
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => this.handleDelete(index)}
                    variant="danger"
                    type="submit"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Form>
          <Form.Group controlId="formBasicEmail">
            {this.state.edit === null ? (
              <Form.Control
                value={this.state.text}
                onChange={this.handleChange}
                type="text"
                placeholder="Masukkan Sesuatu"
              />
            ) : (
              <Form.Control
                value={this.state.text}
                onChange={this.handleChange}
                type="text"
                placeholder="Masukkan Sesuatu"
              />
            )}
          </Form.Group>
          {this.state.edit === null ? (
            <Button onClick={this.handleClick} variant="primary" type="submit">
              Submit
            </Button>
          ) : (
            <Button
              onClick={this.handlePostEdit}
              variant="primary"
              type="submit"
            >
              Edit
            </Button>
          )}
        </Form>
      </Container>
    );
  }
}

export default App;
