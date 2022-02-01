import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">All Users</NavLink>
        </li>
        <li>
          <NavLink to="/u1/posts">My Posts</NavLink>
        </li>
        <li>
          <NavLink to="/posts/new">Create Posts</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Autenticate</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
