import PropTypes from "prop-types";

import UserList from "../components/UserList/UserList";

const User = ({ title }) => {
  const users = [{ id: 5, name: "amir", image: "", posts: 3 }];
  return (
    <div className="center">
      <h2>{title}</h2>
      <UserList items={users} />
    </div>
  );
};

User.defaultProps = {
  title: "User Page",
};

User.propTypes = {
  title: PropTypes.string,
};

export default User;
