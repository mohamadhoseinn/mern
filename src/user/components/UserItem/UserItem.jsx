import "./UserItem.css";

const UserItem = ({ userItem }) => {
  return (
    <li>
      <div>
        <img src={userItem.image} alt={userItem.name} />
      </div>
      <div>
        <h2>{userItem.name}</h2>
        <h2>{userItem.posts}</h2>
      </div>
    </li>
  );
};

export default UserItem;
