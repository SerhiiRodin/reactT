// import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ToDo from "./ToDo";
import { useSelector } from "react-redux";

const TodoDetails = () => {
  // const [todoList, setTodoList] = useState(null);

  const { todo: todoList } = useSelector((state) => state.todo);

  const params = useParams();
  //   console.log(params);

  // Если локал не пустой, то записываем его в todoList при didMount
  // useEffect(() => {
  //   const localTodo = localStorage.getItem("todo");
  //   if (localTodo) {
  //     setTodoList(JSON.parse(localTodo));
  //   }
  // }, []);

  const location = useLocation();
  console.log(location);

  return (
    <>
      <Link to={location.state} className="btn btn-secondary m-2">
        Back
      </Link>
      {todoList &&
        todoList.map(
          (todo) => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
        )}
    </>
  );
};

export default TodoDetails;
