import "./Input.css";

const Input = ({ element, id, type, placeholder, rows }) => {
  const elements =
    element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );
  return <div className={`form-control`}>{elements}</div>;
};

export default Input;
