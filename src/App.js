import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import User from "./user/pages/User";
import NewPost from "./posts/pages/NewPost";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPosts from "./posts/pages/UserPosts";

import "./App.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/:userId/posts" element={<UserPosts />} />
        <Route path="/post/new" element={<NewPost />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
