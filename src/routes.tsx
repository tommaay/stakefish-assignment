import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ExchangeDetails from "@/pages/ExchangeDetails/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:exchangeId",
    element: <ExchangeDetails />,
  },
]);
