import Button from "../../../shared/components/FormElement/Button/Button";

import "./PostItem.css";

const PostItem = ({ postItem }) => {
  return (
    <li>
      <div>
        <img src={postItem.image} alt={postItem.title} />
      </div>
      <div>
        <h2>{postItem.title}</h2>
        <h3>{postItem.description}</h3>
      </div>
      <div>
        <Button to="/amir">Delete</Button>
      </div>
    </li>
  );
};

export default PostItem;
