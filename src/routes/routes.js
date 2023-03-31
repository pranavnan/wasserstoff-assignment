import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Overview from "../pages/Overview";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/overview", element: <Overview /> },
    ],
  },
]);

export default router;
