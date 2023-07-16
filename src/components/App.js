import {  useState } from "react";
import { nanoid } from "nanoid";
import { Toaster } from "react-hot-toast";
import "./App.css";
// import { Card } from "./Card/Card";
// import Counter from "./Counter/Counter";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";
// import ToDoList from "./ToDoList/ToDoList";
import LoginForm from "./LoginForm/LoginForm";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContentInfo";
// import TestUseMemo from "./TestUseMemo/TestUseMemo";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className="App">
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      {/* <Card isOnline={"true"} /> */}
      {/* <Counter /> */}
      {/* <TestUseMemo/> */}
      {/* <ToDoList /> */}
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;


//// Классовый компонент
// import { Component } from "react";

// class App extends Component {
//   state = {
//     isShowModal: false,
//     searchText: "",
//   };

//   showModal = () => {
//     this.setState({ isShowModal: true });
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };

//   createUser = (data) => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//     };
//     console.log(newUser);
//   };

//   handleSearch = (searchText) => {
//     this.setState({ searchText });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Header showModal={this.showModal} />
//         {/* <Card isOnline={"true"} /> */}
//         {/* <Counter /> */}
//         <Search handleSearch={this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
//         {/* <ToDoList />
//         {this.state.isShowModal && (
//           <Modal closeModal={this.closeModal}>
//             <LoginForm
//               createUser={this.createUser}
//               closeModal={this.closeModal}
//             />
//           </Modal>
//         )} */}
//       </div>
//     );
//   }
// }

// export default App;
