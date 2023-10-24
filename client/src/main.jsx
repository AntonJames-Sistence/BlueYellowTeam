import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./components/home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Vite from "./components/vite.jsx";
import ErrorPage from "./components/error-page.jsx";
import NavBarWrapper from "./components/NavBarWrapper/NavBarWrapper.tsx";
import Footer from './components/Footer/footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/vite",
    element: <Vite />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
