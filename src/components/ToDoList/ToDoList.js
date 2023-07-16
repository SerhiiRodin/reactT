import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";

import ToDo from "../ToDo/ToDo";
import FormToDo from "../FormToDo/FormToDo";

const ToDoList = () => {
  const [todoList, setTodoList] = useState("");

  // Если локал не пустой, то записываем его в todoList при didMount
  useEffect(() => {
    const localTodo = localStorage.getItem("todo");
    if (localTodo) {
      setTodoList(JSON.parse(localTodo));
    }
  }, []);

  // Записываем в локал, если изменения с todoList.
  // При didMount, если todoList пустой, то не записываем в локал
  useEffect(() => {
    todoList && localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const handleCheck = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((el) => {
        return el.id === id ? { ...el, completed: !el.completed } : el;
      });
    });
  };

  const handleDelete = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((el) => el.id !== id);
    });

    toast.error("Todo delete successfully.");
  };

  const addTodo = (value) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });

    toast.success("Todo create successfully.");
  };

  return (
    <>
      <h1>My To-Do list</h1>

      <FormToDo addTodo={addTodo} />
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;

// import { Component } from "react";

// import todo from "../../todo.json";

// class ToDoList extends Component {
//   state = {
//     todoList: "",
//     isDelete: false,
//     isAdd: false,
//   };

//   componentDidMount() {
//     // localStorage.setItem("todo", JSON.stringify(todo));
//     if (localStorage.getItem("todo")) {
//       this.setState({ todoList: JSON.parse(localStorage.getItem("todo")) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem("todo", JSON.stringify(this.state.todoList));
//       this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//     }

//     if (prevState.todoList.length < this.state.todoList.length) {
//       localStorage.setItem("todo", JSON.stringify(this.state.todoList));
//       this.setState({ isAdd: true });
//       setTimeout(() => {
//         this.setState({ isAdd: false });
//       }, 1500);
//     }
//   }

//   handleCheck = (id) =>
//     this.setState((prev) => ({
//       todoList: prev.todoList.map((el) => {
//         return el.id === id ? { ...el, completed: !el.completed } : el;
//       }),
//     }));

//   handleDelete = (id) => {
//     this.setState((prev) => {
//       return {
//         todoList: prev.todoList.filter((el) => el.id !== id),
//       };
//     });
//   };

//   addTodo = (value) => {
//     this.setState((prev) => {
//       return {
//         todoList: [
//           ...prev.todoList,
//           {
//             id: nanoid(),
//             title: value,
//             completed: false,
//           },
//         ],
//       };
//     });
//   };

//   //   handleChange = ({ target: { value } }) => this.setState({ textTodo: value });

//   render() {
//     return (
//       <>
//         <h1>My To-Do list</h1>
//         {this.state.isDelete && (
//           <div className="alert alert-danger" role="alert">
//             Todo delete successfully.
//           </div>
//         )}
//         {this.state.isAdd && (
//           <div className="alert alert-success" role="alert">
//             Todo create successfully.
//           </div>
//         )}
//         <FormToDo addTodo={this.addTodo} />
//         {this.state.todoList && (
//           <ul className="list-group list-group-flush">
//             {this.state.todoList.map((todo) => (
//               <ToDo
//                 key={todo.id}
//                 todo={todo}
//                 handleCheck={this.handleCheck}
//                 handleDelete={this.handleDelete}
//               />
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

// export default ToDoList;
