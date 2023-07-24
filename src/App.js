import News from "./component/news";
import ErrorPage from "./component/common/errorPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SavedPosts from "./component/savedPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="posts" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "posts",
    element: <News />,
  },
  {
    path: "saved-posts",
    element: <SavedPosts />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
