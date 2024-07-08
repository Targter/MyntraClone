import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./routes/Home.jsx";
import "./App.css";
import CartBag from "./routes/CartBag.jsx";
import Home from "./routes/Home.jsx";
import MyntraStore from "./store/store.js";
// import REdux Store in the main file
import { Provider } from "react-redux";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <CartBag /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
