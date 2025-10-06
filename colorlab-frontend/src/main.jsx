import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";

const appRouter = createBrowserRouter([
  {
    path: "ColorLab/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ColorLab/home",
        element: <Home />,
      },
      {
        path: "ColorLab/login",
        element: <LogIn />,
      },
      {
        path: "ColorLab/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
