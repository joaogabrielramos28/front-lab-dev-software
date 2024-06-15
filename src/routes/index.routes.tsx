import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
