import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import ErrorPage from "../ErroePage/ErrorPage";
import Home from "../Pages/Home";
import AuthLayouts from "../AuthLayouts/AuthLayouts";
import Login from "../Components/Login";
import Registetion from "../Components/Registetion";
import Kids from "../Components/Kids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/TrendingApp.json"),
      },
    ],
  },

  {
    path: "/kids",
    element: <Kids></Kids>,
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registetion></Registetion>,
      },
    ],
  },
]);

export default router;
