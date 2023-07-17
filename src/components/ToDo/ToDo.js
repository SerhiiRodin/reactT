import React from "react";
import { Link } from "react-router-dom";

const ToDo = ({ todo, handleCheck, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          {handleCheck && (
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
            />
          )}
          <Link to={todo.id}>{todo.title}</Link>
        </div>
        <div className="col">
          {handleCheck && (
            <button
              disabled={!todo.completed}
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleDelete(todo.id)}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ToDo;
