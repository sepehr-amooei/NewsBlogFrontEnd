import { useRouteError, Routes, Route, Navigate } from "react-router-dom";
import SavedPosts from "./component/savedPosts";
import News from "./component/news";
import ErrorPage from "./component/common/errorPage";
import NavBar from "./component/common/navbar";
import PostDetails from "./component/postDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts" element={<News />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
