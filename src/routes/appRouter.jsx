import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "../layout/PrivateRoute";
import PublicRoute from "../layout/PublicRoute";
import Details from "../pages/DetailsPage";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import Error from "../pages/Error";

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    errorElement: <Error/>, // show error component for path is different
    children: [
      {
        path: "/",
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/signup",
            element: <SignupPage />,
          },
        ],
      },
      {
        path: "/",
        element: <PrivateRoute />,
        children: [
          {
            path: "/home",
            element: <Home />,  
          },
          {
            path: "/employee/:id",
            element: <Details />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;