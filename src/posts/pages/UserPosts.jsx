import { useParams } from "react-router-dom";

import PostsList from "../components/PostsList/PostsList";

const posts = [
  {
    id: "p1",
    title: "Post Title",
    description: "Post Description",
    image: "",
    creator: "u1",
  },
  {
    id: "p2",
    title: "Post Title 2",
    description: "Post Description 2",
    image: "",
    creator: "u2",
  },
];

const UserPosts = () => {
  const { userId } = useParams();
  const lodedPost = posts.filter((item) => item.creator === userId);

  return (
    <div>
      <PostsList items={lodedPost} />
    </div>
  );
};

export default UserPosts;
