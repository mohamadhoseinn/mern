import { useDispatch, useSelector } from "react-redux";

import {
  InputVlueAction,
  InputIsValidAction,
} from "../../../../redux/Input/InputAction";

import "./Input.css";

const Input = ({ element, id, type, placeholder, rows, errorText }) => {
  const inputReducer = useSelector((state) => state.inputReducer);
  const { value, isValid } = inputReducer;

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const valueEvent = e.target.value;
    dispatch(InputIsValidAction());
    dispatch(InputVlueAction(valueEvent));
  };

  const elements =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={value}
      />
    );
  return (
    <div className={`form-control`}>
      {elements}
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
