import React from "react";

import { Link, useLocation } from "react-router-dom";

const ToDo = ({ todo, handleCheck, handleDelete }) => {
  const location = useLocation();
  // console.log(location);

  const handleCheckboxChange = () => {
    handleCheck(todo.id);
  };

  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          {handleCheck && (
            <input
              className="form-check-input me-2"
              type="checkbox"
              checked={todo.completed}
              onChange={handleCheckboxChange}
            />
          )}
          <Link to={todo.id} state={location}>
            {todo.title}
          </Link>
        </div>
        <div className="col">
          {handleCheck && (
            <button
              disabled={!todo.completed}
              type="button"
              className="btn-close"
              aria-label="Close"
              // onClick={() => handleDelete(todo.id)}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ToDo;
