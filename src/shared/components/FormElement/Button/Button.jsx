import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({ children, href, to, onClick, type }) => {
  if (href) {
    <a href={href} className={`button`}>
      {children}
    </a>;
  }
  if (to) {
    <Link to={to} className={`button`}>
      {children}
    </Link>;
  }
  return (
    <button className={`button`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
