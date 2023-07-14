import { Component } from "react";
import "./App.css";
// import { Card } from "./Card/Card";
// import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
import LoginForm from "./LoginForm/LoginForm";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    isShowModal: false,
  };

  componentDidMount() {
    console.log("mount");
  }

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

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} />
        {/* <Card isOnline={"true"} /> */}
        {/* <Counter /> */}
        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <LoginForm
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
