import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultPage from "../pages/DefaultPage/default.page";
import TodoPage from "../pages/TodoPage/todo.page";
import ErrorPage from "../pages/ErrorPage/error.page";
import ProfilePage from "../pages/ProfilePage/profile.page";
import Document from "../components/Document";
import FreelancePage from "../pages/FreelancePage/freelance.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Document />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DefaultPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />
      },
      {
        path: "/freelance",
        element: <FreelancePage />
      },
      {
        path: "/profil/:userTag",
        element: <ProfilePage />,
      },
    ]
  },
]);

function RouteMap() {
  return <RouterProvider router={router} />;
}

export default RouteMap;
