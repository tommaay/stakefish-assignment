import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ExchangeDetails from "pages/ExchangeDetails/index.tsx";
import ErrorBoundary from "components/ErrorBoundary.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary: () => <ErrorBoundary />,
  },
  {
    path: "/:exchangeId",
    element: <ExchangeDetails />,
    ErrorBoundary: () => <ErrorBoundary />,
  },
]);
