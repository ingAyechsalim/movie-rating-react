import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      image: "",
      rating: "",
      id: "",
      newmovie: {
        title: "",
        year: "",
        image: "",
        rating: "",
        id: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: Math.random()
    });
  };
  onClose = e => {
    e.stopPropagation();
    this.props.onClose && this.props.onClose(e);
  };
  submitHandler = evt => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <form className="main" onSubmit={this.submitHandler}>
        <input
          className="input-add"
          type="text"
          name="title"
          placeholder="title....."
          value={this.state.title}
          onChange={e => {
            this.handleChange(e);
          }}
          required
        />
        <input
          className="input-add"
          type="text"
          name="image"
          placeholder="source image....."
          onChange={e => {
            this.handleChange(e);
          }}
          required
        />
        <input
          className="input-add"
          type="number"
          name="year"
          placeholder="annee....."
          min="1990"
          max="2018"
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          className="input-add"
          type="number"
          placeholder="note*****"
          name="rating"
          min="1"
          max="5"
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />{" "}
        <div>
          <input
            className="button-add"
            type="Submit"
            name="ajouter"
            onClick={() => this.props.onAdd(this.state)}
          />
          <button
            className="button-add"
            onClick={e => {
              this.onClose(e);
            }}
          >
            Fermer{" "}
          </button>
        </div>
      </form>
    );
  }
}

export default Modal;
