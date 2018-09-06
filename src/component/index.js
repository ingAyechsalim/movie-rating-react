import React, { Component } from "react";
import Modal from "./modal";
import MovieList from "./style.css";

class NewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newmovie: []
    };
    this.showModal = () => {
      this.setState({
        show: !this.state.show
      });
    };
  }
  addNewMovie = newmovie => {
    this.setState({
      newmovie: this.state.newmovie
    });
  };

  render() {
    return (
      <div className="App">
        <input
          className="ADD"
          type="button"
          onClick={this.showModal}
          value="+"
        />
        <Modal
          onClose={this.showModal}
          show={this.state.show}
          onAdd={newmovie => this.props.addNewMovie(newmovie)}
        />
        <div />
      </div>
    );
  }
}
export default NewModal;
