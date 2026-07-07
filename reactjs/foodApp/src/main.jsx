import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurentMenu.jsx";
import { Error } from "./components/Error";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "restaurent/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
