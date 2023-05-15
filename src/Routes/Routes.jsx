import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookServices from "../pages/BookServices/BookServices";
import Bookings from "../pages//Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "book/:id",
        element: <PrivateRoute><BookServices></BookServices></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-monirul480.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element:  <PrivateRoute><Bookings></Bookings></PrivateRoute>  
        ,
      },
    ],
  },
]);

export default router;
