import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Table, Navbar, Modal } from "react-bootstrap";

class ModalDelete extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [], text: "", isopen: false };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleClose = () => {
    this.setState({ show: this.state.show });
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

  render() {
    console.log(this.state.text);

    const { item } = this.state;
    return (
      <Container>
        <Button
          onClick={() => {
            this.handleModal();
          }}
          variant="danger"
          type="submit"
          size="sm"
        >
          Delete
        </Button>
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal"
          show={this.state.show}
          onHide={() => this.handleModal()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="danger"
              onClick={() => this.handleDelete(this.props.index)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default ModalDelete;
