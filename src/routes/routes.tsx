import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "../pages/TodoPage/todo.page";
import ErrorPage from "../pages/ErrorPage/error.page";
import ProfilePage from "../pages/ProfilePage/profile.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />
  },
  {
    path: "/profil/:userTag",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function RouteMap() {
  return <RouterProvider router={router} />;
}

export default RouteMap;
