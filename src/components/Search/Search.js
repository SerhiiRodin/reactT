import { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ value });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      
      this.props.handleSearch(this.state.value);
    // console.log(this.state);
  };

  render() {
    return (
      <>
        <form
          className="d-flex mt-2"
          role="search"
          onSubmit={this.handleSubmit}
        >
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
