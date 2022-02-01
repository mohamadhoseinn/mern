import PropTypes from "prop-types";

import UserItem from "../UserItem/UserItem";

import "./UserList.css";

const UserList = ({ items, notFound }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>{notFound}</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {items.map((item) => {
          return <UserItem key={item.id} userItem={item} />;
        })}
      </ul>
    </div>
  );
};

UserList.defaultProps = {
  notFound: "Page NotFound!",
};

UserList.propTypes = {
  notFound: PropTypes.string,
};

export default UserList;
