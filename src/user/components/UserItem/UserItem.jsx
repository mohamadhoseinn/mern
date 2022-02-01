import { Link } from "react-router-dom";

import "./UserItem.css";

const UserItem = ({ userItem }) => {
  return (
    <li>
      <Link to={`/${userItem.id}/posts`}>
        <div>
          <img src={userItem.image} alt={userItem.name} />
        </div>
        <div>
          <h2>{userItem.name}</h2>
          <h2>{userItem.posts}</h2>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
