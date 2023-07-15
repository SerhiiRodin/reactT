import { Component } from "react";

class FormToDo extends Component {
  state = {
    todo: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.todo);

    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
        <input
          name="todo"
          className="form-control me-2"
          type="search"
          placeholder="Input text"
          aria-label="Search"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default FormToDo;
