import PropTypes from "prop-types";

const NewPost = ({ title }) => {
  return <h2 style={{ textAlign: "center" }}>{title}</h2>;
};

NewPost.defaultProps = {
  title: "Posts Page",
};

NewPost.propTypes = {
  title: PropTypes.string,
};

export default NewPost;
