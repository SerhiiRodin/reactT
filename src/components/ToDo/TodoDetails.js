import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToDo from "./ToDo";

const TodoDetails = () => {
  const [todoList, setTodoList] = useState(null);

  const params = useParams();
  console.log(params);

  // Если локал не пустой, то записываем его в todoList при didMount
  useEffect(() => {
    const localTodo = localStorage.getItem("todo");
    if (localTodo) {
      setTodoList(JSON.parse(localTodo));
    }
  }, []);

  return (
    <>
      {todoList &&
        todoList.map(
          (todo) => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
        )}
    </>
  );
};

export default TodoDetails;
