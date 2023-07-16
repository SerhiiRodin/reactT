import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
// import { Card } from "./Card/Card";
// import Counter from "./Counter/Counter";
import Header from "./Header/Header";
// import Modal from "./Modal/Modal";
// import ToDoList from "./ToDoList/ToDoList";
// import LoginForm from "./LoginForm/LoginForm";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContentInfo";

class App extends Component {
  state = {
    isShowModal: false,
    searchText: "",
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} />
        {/* <Card isOnline={"true"} /> */}
        {/* <Counter /> */}
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
        {/* <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <LoginForm
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )} */}
      </div>
    );
  }
}

export default App;
