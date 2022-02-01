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

  const changehandler = (e) => {
    const amir = e.target.value;
    dispatch(InputIsValidAction());
    dispatch(InputVlueAction(amir));
  };

  const elements =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changehandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changehandler}
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
