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
        <button>Delete</button>
      </div>
    </li>
  );
};

export default PostItem;
