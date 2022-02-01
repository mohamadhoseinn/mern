import PostItem from "../PostItem/PostItem";

import "./PostsList.css";

const PostsList = ({ items, notfound }) => {
  if (items.length === 0) {
    return (
      <div>
        <h2>{notfound}</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {items.map((item) => {
          return <PostItem key={item.id} postItem={item} />;
        })}
      </ul>
    </div>
  );
};

PostsList.defaultProps = {
  notfound: "There are no posts!",
};

export default PostsList;
