import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../redux/counter/counterSlice";

const Counter = () => {
  // const value = useSelector((state) => state.counter.value);
  // const step = useSelector((state) => state.counter.step);

  const { value, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment(step));
  };

  const handleClickDecrement = () => {
    dispatch(decrement(step));
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card bg-dark text-white " style={{ width: "600px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: "80px" }}>
            {value}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button
              className="btn btn-outline-success me-5"
              onClick={handleClickIncrement}
            >
              +
            </button>
            <button
              className="btn  btn-outline-danger ms-5"
              onClick={handleClickDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
