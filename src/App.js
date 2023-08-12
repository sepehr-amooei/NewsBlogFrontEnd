import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./component/common/errorPage";
import NavBar from "./component/common/navbar";
import PostDetails from "./component/postDetails";
import LoginForm from "./component/common/loginForm";
import RegisterForm from "./component/common/registerForm";
import PostForm from "./component/postForm";
import SavedPosts, { loader as savedPostsLoader } from "./component/savedPosts";
import Home, { loader as postsLoader } from "./component/home";
import { loader as postDetailsLoader } from "./component/postDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/posts" />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
      {
        path: "/posts/edit/:id",
        element: <PostForm />,
      },
      {
        path: "/posts",
        element: <Home />,
        loader: postsLoader,
      },
      {
        path: "/saved-posts",
        element: <SavedPosts />,
        loader: savedPostsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <main>
        <RouterProvider router={router} />
        {/* <Routes>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts" element={<News />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes> */}
      </main>
    </div>
  );
}
export default App;
