const FormFilterTodo = ({ setSearchParams, searchParamsValue }) => {
  const handleChange = (event) => {
    setSearchParams({ filter: event.target.value });
  };

  return (
    <form className="d-flex mb-3" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Filter"
        aria-label="Search"
        value={searchParamsValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default FormFilterTodo;

// class FormFilterToDo extends Component {
//   state = {
//     todo: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <form className="d-flex mb-3" role="search">
//         <input
//           name="todo"
//           className="form-control me-2"
//           type="search"
//           placeholder="Filter"
//           aria-label="Search"
//           //   value={this.state.todo}
//           onChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }

// export default FormFilterToDo;
