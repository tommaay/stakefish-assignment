import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ExhangeDetails from "pages/ExhangeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:exchangeId",
    element: <ExhangeDetails />,
  },
]);
