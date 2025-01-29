import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomeView from "./Views/HomeView.jsx";
import ErrorView from "./Views/ErrorView.jsx";
import CategoryView from "./Views/CategoryView";
import FavouritesView from "./Views/FavouritesView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      { path: "/", element: <HomeView /> },
      { path: "/category", element: <CategoryView /> },
      { path: "/favourites", element: <FavouritesView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
