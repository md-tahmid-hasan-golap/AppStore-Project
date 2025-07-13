import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import ErrorPage from "../ErroePage/ErrorPage";
import Home from "../Pages/Home";
import AuthLayouts from "../AuthLayouts/AuthLayouts";
import Login from "../Components/Login";
import Registetion from "../Components/Registetion";
import Kids from "../Components/Kids";
import TrendingAppDetails from "../Components/TrendingAppDetails";

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
        loader: async () => {
          const trending = await fetch("/TrendingApp.json");
          const trendingData = await trending.json();
          const Productivity = await fetch("/ProductivityApp.json");
          const ProductivityData = await Productivity.json();
          const Education = await fetch("/Education.json");
          const EducationData = await Education.json();
          const helth = await fetch("/HealthApp.json");
          const helthData = await helth.json();

          //   console.log(trendingData, ProductivityData);
          return { trendingData, ProductivityData, EducationData, helthData };
        },
      },
      {
        path: "/trendinapp-details/:id",
        element: <TrendingAppDetails></TrendingAppDetails>,
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
